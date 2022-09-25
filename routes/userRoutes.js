const express = require('express');
const router = express.Router();

const UserModel = require('../models/User');
const AccountModel = require('../models/Account');
const TransactionModel = require('../models/Transaction');

//* New Account
//? user/:userId
router.post('/:userId', (req, res) => {
	const { userId } = req.params;
	const { initialCredit } = req.body;

	console.log('user - '.toLocaleUpperCase() + userId);

	//* Find the user
	//* We assume it exists already
	UserModel.findOne({ userId: userIdToFind })
		.then((user) => {
			console.log('user found!'.toLocaleUpperCase());

			console.log('USER - ' + user);
			console.log('ID - ' + user.userId);

			//* New account
			const account = new AccountModel({
				accountId: Math.floor(Math.random() * 100) + '',
			});

			account
				.save()
				.then((newAccount) => {
					console.log('a new account has been opened!'.toLocaleUpperCase());
					console.log('');
				})
				.catch((err) => {
					res.status(500).send({ message: 'Account creation error...', err });
				});
		})
		.catch((err) => {
			console.log('user not found...'.toLocaleUpperCase(), err);
			res.status(404).send({ message: 'User not found...', err });
		});

	//* Transaction check
	if (initialCredit > 0) {
		const transaction = new TransactionModel({
			credit: initialCredit,
		});
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
