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

	//* Find the user - (We assume it exists already)
	UserModel.findOne({ userId: userId })
		.then((user) => {
			console.log('user found!'.toLocaleUpperCase());

			//* New account
			const account = new AccountModel({
				accountId: Math.floor(Math.random() * 100) + '',
				credit: 0,
				transactions: []
			});

			user.accounts.push(account.accountId);

			//* Transaction check
			if (initialCredit > 0) {
				console.log('a new transaction has occurred!'.toLocaleUpperCase());
				const transaction = new TransactionModel({
					transactionId: Math.floor(Math.random() * 100) + '',
					credit: initialCredit,
				});

				account.credit += transaction.credit;
				account.transactions.push(transaction.transactionId);

				user.balance += account.credit;

				transaction.save()
					.then(() => { console.log("new transaction created!".toLocaleUpperCase()); })
					.catch((txnErr) => {
						console.log('transaction save - error:'.toLocaleUpperCase(), txnErr);
						res.status(500).send({ message: 'Transaction save error...', txnErr });
					})
			}

			account.save()
				.then(() => {
					console.log("new account created!".toLocaleUpperCase());
				}).catch((accErr) => {
					console.log('account save - error:'.toLocaleUpperCase(), accErr);
					res.status(500).send({ message: 'Account save error...', accErr });
				})

			user.save()
				.then(() => {
					res.status(201).send({ message: "A new account has been created!" });
				}).catch((userErr) => {
					console.log('user update - error:'.toLocaleUpperCase(), userErr);
					res.status(500).send({ message: 'User update error...', userErr });
				});
		})
		.catch((err) => {
			console.log('user not found...'.toLocaleUpperCase(), err);
			res.status(404).send({ message: 'User not found...', err });
		});
});

//* User Details
//? user/details/:customerId
router.get('/details/:customerId', (req, res) => {
	const { customerId } = req.params;

	res.status(200).send({ message: 'Details for user - ' + customerId });
});

module.exports = router;
