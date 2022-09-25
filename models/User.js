const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: String,
	name: String,
	surname: String,
	balance: Number,
	accounts: [String]
});

module.exports = mongoose.model.Users || mongoose.model('Users', UserSchema);
