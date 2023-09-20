// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

import { bankAccounts } from "../data/data";

export function getClientWithNoMoney(array) {
    const clientsWithNoMoney = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    const account = bankAccounts[i];
    
    // Check if the balance is 0 and add the name to the result array
    if (account.balance === 0) {
      clientsWithNoMoney.push(account.name);
    }
  }

  return clientsWithNoMoney;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
