import { HomePage } from '../support/page_objects/homePage';
import { ReservePage } from '../support/page_objects/reservePage';
import { PurchasePage } from '../support/page_objects/purchasePage';

const home = new HomePage();
const reserve = new ReservePage();
const purchase = new PurchasePage();

const cities = ["Boston", "Portland", "Philadelphia", "San Diego"];
const destCities = ["Rome", "London", "Berlin", "New York", "Dublin", "Cairo"];

// Reusable function for purchase flow
function purchaseEndToEnd(deptCity, destCity, flightSeq) {
    if (!deptCity) {
        deptCity = cities[Math.floor(Math.random() * cities.length)];
    }
    if (!destCity) {
        destCity = destCities[Math.floor(Math.random() * destCities.length)];
    }


    flightSeq = flightSeq && flightSeq > 0 ? flightSeq : Math.floor(Math.random() * 3) + 1;

    if (deptCity === destCity) {
        throw new Error("Departure and destination cannot be the same!");
    }

    cy.log(`Booking flight: ${deptCity} → ${destCity}, Flight #${flightSeq}`);

    home.open();
    home.selectDeparture(deptCity);
    home.selectDestination(destCity);
    home.clickFindFlights();

    reserve.selectFlight(flightSeq);

    const userData = generateUserData();

    purchase.fillUserDetails(userData);
    purchase.clickPurchase();

    purchase.getStatus().should('contain.text', 'PendingCapture');

    purchase.getPrice().invoke('text').then(priceText => {
        const price = parseFloat(priceText.replace('$', ''));
        expect(price).to.be.greaterThan(100);
    });
}

describe('BlazeDemo Flight Purchase', () => {

    it('Test Case 1: Boston → Berlin, Flight #2', () => {
        purchaseEndToEnd('Boston', 'Berlin', 2);
    });

    it('Test Case 2: Random flight', () => {
        purchaseEndToEnd();
    });

    it('Test Case 3: Invalid same departure/destination', () => {
        expect(() => {
            purchaseEndToEnd('Boston', 'Boston', 1);
        }).to.throw('cannot be the same');
    });

    it('Test Case 4: Invalid flight number 0', () => {
        let errorThrown = false;
        cy.on('fail', (error) => {
            errorThrown = true;
            expect(error.message).to.include('Invalid flight number: 0');
        });
        
        purchaseEndToEnd('Paris', 'Berlin', 0);
        
        // Verify error was thrown
        cy.wrap(null).then(() => {
            expect(errorThrown, 'Expected error to be thrown for invalid flight number').to.be.true;
        });
    });

    it('Test Case 5: Any valid random input', () => {
        purchaseEndToEnd('Boston', 'London', 1);
    });
});
