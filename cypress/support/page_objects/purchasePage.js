export class PurchasePage {
    fillUserDetails(user) {
        cy.get('#inputName').type(user.name);
        cy.get('#address').type(user.address);
        cy.get('#city').type(user.city);
        cy.get('#state').type(user.state);
        cy.get('#zipCode').type(user.zip);
    }

    clickPurchase() {
        // Click the purchase submit button
        cy.get('input[type="submit"].btn.btn-primary').click();
    }

    getStatus() {
        return cy.get('td:contains("Status")').next();
    }

    getPrice() {
        return cy.get('td:contains("Amount")').next();
    }
}
