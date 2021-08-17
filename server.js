const express = require('express');
require('dotenv').config({ path: './config/.env' })
require('./config/db');
const app = express();
const userRoutes = require('./routes/user.routes');
const { json } = require('express');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTES
app.use('/api/user', userRoutes);

// SERVER
app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})