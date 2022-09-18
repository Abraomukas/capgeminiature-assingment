const express = require('express');
const router = express.Router();

//* New Account
//? user/:customerId
router.post('/:customerId', (req, res) => {
	const { id } = req.params;
	const { initialCredit } = req.body;

	console.log('a new account has been opened!'.toLocaleUpperCase());
	console.log('client - '.toLocaleUpperCase() + id);

	if (initialCredit > 0) {
		//TODO New transaction to user with customerId === id
	}
});

//* User Details
//? user/details/:customerId
router.get('/details/:customerId', (req, res) => {
	const { id } = req.params;

	console.log('details for user - '.toLocaleUpperCase() + id);
});
