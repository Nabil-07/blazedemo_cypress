export class HomePage {
    open() {
        cy.visit('/');
    }

    selectDeparture(city) {
        cy.get('select[name="fromPort"]').select(city);
    }

    selectDestination(city) {
        cy.get('select[name="toPort"]').select(city);
    }

    clickFindFlights() {
        cy.get('input.btn.btn-primary').click();
    }
}
