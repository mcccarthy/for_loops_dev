/** @format */

// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
	let lowestBalanceAccount = null;

	for (let i = 0; i < array.length; i++) {
		// Check if the current account has a positive balance
		if (array[i].balance > 0) {
			// If lowestBalanceAccount is null or the current account's balance is lower, update lowestBalanceAccount
			if (
				!lowestBalanceAccount ||
				array[i].balance < lowestBalanceAccount.balance
			) {
				lowestBalanceAccount = array[i];
			}
		}
	}

	// If no account with a positive balance is found, return an empty array
	return lowestBalanceAccount ? [lowestBalanceAccount] : [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
