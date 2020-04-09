// Import all the users models
const { User, Client } = require('../models/index');

// Import all the service constructors
const SendEmailService = require('./SendEmailService');
const UserService = require('./UserService');

// Create the service objects with dependencies
const sendEmailService = new SendEmailService();

const userService = new UserService({
	db: {
		User,
		Client,
	},
	services: {sendEmailService},
});

// Export the service object
module.exports = {
	userService,
};
