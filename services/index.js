// Import all the users models
const { User, Client } = require('../models/index');

// Import all the service constructors
const UserService = require('./UserService');
const ImageService = require('./ImageService');

// Create the service objects with dependencies
const userService = new UserService({
	db: {
		User,
		Client,
	},
	services: {},
});

const imageService = new ImageService({
	services: {},
});
// Export the service object
module.exports = {
	userService,
	imageService,
};
