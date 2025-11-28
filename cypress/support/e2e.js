// This file is the Cypress support file expected by Cypress 10+.
// I am using Simple data generator instead of faker
window.generateUserData = () => ({
  name: 'John Doe Test ' + Math.random().toString(36).substring(7),
  address: Math.floor(Math.random() * 9999) + ' Main Street',
  city: ['Boston', 'Berlin', 'Paris', 'Rome', 'London', 'Portland'][Math.floor(Math.random() * 6)],
  state: ['CA', 'NY', 'TX', 'FL', 'WA', 'VA'][Math.floor(Math.random() * 6)],
  zip: String(Math.floor(Math.random() * 90000) + 10000)
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false
})
