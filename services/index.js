// Import all the users models
const { User, Client, Provider } = require('../models/index');

// Import all the service constructors
const UserService = require('./UserService');

// Create the service objects with dependencies
const userService = new UserService({
	db: {
		User,
		Client,
		Provider,
	},
	services: {},
});

// Export the service object
module.exports = {
	userService,
};
