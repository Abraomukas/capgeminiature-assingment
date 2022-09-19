const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	customerId: String,
	name: String,
	surname: String,
	balance: Number,
});

module.exports = mongoose.model.Users || mongoose.model('Users', UserSchema);
