const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	transactionId: String,
	credit: Number,
});

module.exports =
	mongoose.model.Transactions ||
	mongoose.model('Transactions', TransactionSchema);
