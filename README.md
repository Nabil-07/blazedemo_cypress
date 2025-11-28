BlazeDemo Cypress Automation Suite

This project contains an automated test suite for the BlazeDemo sample website (https://blazedemo.com
).
The tests are written in JavaScript, use Cypress, and follow the Page Object Model (POM) structure.

1. What’s inside this project
1.1 Main Test File

cypress/e2e/purchase.spec.js

Contains all test scenarios

Includes the main reusable function purchaseEndToEnd()

1.2 Page Objects (POM)

These files contain page-specific locators and reusable actions:

cypress/support/page_objects/homePage.js

cypress/support/page_objects/reservePage.js

cypress/support/page_objects/purchasePage.js

1.3 Support Utilities

cypress/support/e2e.js, which includes:

Random user data generator

Common helpers

Global hooks

1.4 Project Configuration

cypress.config.js — Cypress settings

package.json — scripts & dependencies

2. How this project meets the requirements

    i.   Language: JavaScript
    ii.  Framework: Cypress
    iii. Design Pattern: Page Object Model (POM)

3. purchaseEndToEnd(deptCity, destCity, flightSeq)

This function performs the complete flow:

Accepts 3 optional parameters

Generates random values when parameters are missing

Selects the correct flight based on the sequence number

Fills the purchase form with randomly generated dummy data

Performs the required validations:

Status should contain "PendingCapture"

Price should be greater than $100

Includes input validation — invalid input immediately stops the test and logs the reason

4. Test Scenarios Included

 i.     Boston, Berlin, 2
 ii.    No parameters (all random)
 iii.   Boston, Boston, 1 — expected failure (same city)
 iv.    Paris, Berlin, 0 — expected failure (invalid flight number)
 v.     Boston, London, 1 — sample custom input

These scenarios cover both successful cases and negative test cases.

5. How to Run the Tests
5.1 Install dependencies
npm install

5.2 Run all tests with report
npm test

5.3 Open Cypress UI
npm run cypress:open

5.4 Run headless
npm run cypress:run


Reports will be generated in:

cypress/reports/
