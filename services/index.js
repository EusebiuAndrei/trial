// Import all the users models
const { User } = require('../models/index');

// Import all the service constructors
const UserService = require('./UserService');

// Create the service objects with dependencies
const userService = new UserService({
	db: {
		User,
	},
	services: {},
});

// Export the service object
module.exports = {
	userService,
};
