const express = require('express');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 8080;

const UserRoutes = require('./routes/userRoutes');

server.use('/user', UserRoutes);

//* HEALTH CHECK
server.get('/', (_req, res) => {
	res.status(200).send({ message: '👋🌍' });
});

server.listen(port, () => {
	console.log(
		`the assignment is live on http://localhost:${port}!`.toLocaleUpperCase()
	);
});
