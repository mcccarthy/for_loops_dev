/** @format */

// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import {bankAccounts} from '../data/data';

export function getAllWithdrawals(bankAccounts) {
	let withdrawalSums = [];

	// Iterate over each bank account
	for (let i = 0; i < bankAccounts.length; i++) {
		let sum = 0;

		// Check if the account has withdrawals
		if (bankAccounts[i].withdrawals) {
			// Sum up the withdrawals
			for (let j = 0; j < bankAccounts[i].withdrawals.length; j++) {
				sum += bankAccounts[i].withdrawals[j];
			}
		}

		// Add the sum to the array, or 0 if there are no withdrawals
		withdrawalSums.push(sum);
	}

	return withdrawalSums;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
