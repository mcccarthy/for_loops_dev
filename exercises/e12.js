
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let greaterThanOneHundred = [];

  // Iterate over each account
  for (let i = 0; i < array.length; i++) {
    // Check if deposits exists and is an array
    if (Array.isArray(array[i].deposits)) {
      // Check each deposit of the account
      for (let j = 0; j < array[i].deposits.length; j++) {
        // If the deposit is greater than 100, add it to the array
        if (array[i].deposits[j] > 100) {
          greaterThanOneHundred.push(array[i].deposits[j]);
        }
      }
    }
  }

  console.log(greaterThanOneHundred);
  return greaterThanOneHundred;
}





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
