const express = require('express');
const router = express.Router();

//* New Account
//? user/:customerId
router.post('/:customerId', (req, res) => {
	const { customerId } = req.params;
	const { initialCredit } = req.body;

	console.log('a new account has been opened!'.toLocaleUpperCase());
	console.log('client - '.toLocaleUpperCase() + customerId);

	if (initialCredit > 0) {
		//TODO New transaction to user with customerId === id
	}

	res.status(201).send({ message: '' });
});

//* User Details
//? user/details/:customerId
router.get('/details/:customerId', (req, res) => {
	const { customerId } = req.params;

	res.status(200).send({ message: 'Details for user - ' + customerId });
});

module.exports = router;
