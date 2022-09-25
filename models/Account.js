const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
	accountId: String,
	credit: Number,
	transactions: [String],
});

module.exports =
	mongoose.model.Accounts || mongoose.model('Accounts', AccountSchema);
