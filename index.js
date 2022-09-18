const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;
const server = express();

server.use(cors({ origin: '*' }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const UserRoutes = require('./routes/userRoutes');

//* MONGODB
const dbConnect = require('./db/dbConnect');
dbConnect();

//* HEALTH CHECK
server.get('/', (_req, res) => {
	res.status(200).send({ message: '👋🌍' });
});

//* USER ROUTES
//? user/...
server.use('/user', UserRoutes);

server.listen(port, () => {
	console.log(
		`the assignment is live on http://localhost:${port}!`.toLocaleUpperCase()
	);
});
