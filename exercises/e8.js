/** @format */

// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
	if (array.length === 0) {
		return []; 
	}

	let indexOfHighestBalance = 0;
	let highestBalance = array[0].balance;

	for (let i = 1; i < array.length; i++) {
		// Start from the second element
		if (array[i].balance > highestBalance) {
			highestBalance = array[i].balance;
			indexOfHighestBalance = i;
		}
	}

	console.log([array[indexOfHighestBalance]]);
	return [array[indexOfHighestBalance]];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
