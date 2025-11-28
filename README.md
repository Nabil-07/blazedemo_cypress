# BlazeDemo Cypress Automation Suite

This project contains an automated test suite for [https://blazedemo.com](https://blazedemo.com), built using **JavaScript**, **Cypress**, and the **Page Object Model (POM)** design pattern.

---

## Project Structure

### Main Test File
- **`cypress/e2e/purchase.spec.js`**  
  Contains all test scenarios and the core function **`purchaseEndToEnd()`**

### Page Objects
Located in **`cypress/support/page_objects/`**
- **`homePage.js`**
- **`reservePage.js`**
- **`purchasePage.js`**

### Support Utilities
- **`cypress/support/e2e.js`**  
  Includes random data generator, helpers, and global hooks

### Configuration
- **`cypress.config.js`**  
- **`package.json`**

---

## Function: `purchaseEndToEnd(deptCity, destCity, flightSeq)`

- Accepts **3 optional parameters**  
- Uses **random values** if parameters are missing  
- Selects flight based on sequence  
- Fills form with **dummy data**  
- Validates:  
  - **Status contains `"PendingCapture"`**  
  - **Price > $100**  
- Stops execution and logs reason if input is invalid  

---

## Test Scenarios

1. **Boston, Berlin, 2**  
2. **No parameters (random)**  
3. **Boston, Boston, 1** 
4. **Paris, Berlin, 0**  
5. **Boston, London, 1** — custom input  

---


## How to Run

```bash
npm install           # Install dependencies
npm test              # Run all tests with report
npm run cypress:open  # Open Cypress UI
npm run cypress:run   # Run in headless mode
Reports are saved in cypress/reports/
