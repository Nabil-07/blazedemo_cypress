export class ReservePage {
    selectFlight(flightNumber = 1) {
        cy.get('table tbody tr').then(rows => {
            if (flightNumber < 1 || flightNumber > rows.length) {
                throw new Error(`Invalid flight number: ${flightNumber}`);
            }
            // Click the submit button within the specific flight row
            cy.wrap(rows[flightNumber - 1])
                .find('input[type="submit"]')
                .first()
                .click();
        });
    }
}
