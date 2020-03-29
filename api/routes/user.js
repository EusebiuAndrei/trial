const { Router } = require('express');
const router = Router();

exports = app => {
	// Add the user router as a middleware to app
	app.use('/users', router);

	// Use Router to handle api endpoints
};
