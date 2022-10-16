const mongoose = require('mongoose');

//! Just for localhost purposes
const MONGO_URI =
	'mongodb+srv://harvest:hA$$-BEST101@cluster0.irbq2.mongodb.net/harvest?retryWrites=true&w=majority';

async function dbConnect() {
	console.log('connecting to mongodb atlas...'.toLocaleUpperCase());
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log(
				'successfully connected to mongodb atlas!'.toLocaleUpperCase()
			);
		})
		.catch((err) => {
			console.log('unable to connect to mongodb atlas!'.toLocaleUpperCase());
			console.error(err);
		});
}

module.exports = dbConnect;
