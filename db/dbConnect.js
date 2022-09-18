const mongoose = require('mongoose');

require('dotenv').config();

async function dbConnect() {
	console.log('connecting to mongodb atlas...'.toLocaleUpperCase());
	mongoose
		.connect(process.env.MONGO_URI, {
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
