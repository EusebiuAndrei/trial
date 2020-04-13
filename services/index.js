// Import all the users models
const {
	User,
	Client,
	Provider,
	Menu,
	Schedule,
} = require('../models/index');

// Import all the service constructors
const UserService = require('./UserService');
const MenuService = require('./MenuService');
const ScheduleService = require('./ScheduleService');
// Create the service objects with dependencies
const menuService = new MenuService({
	db: {
		Menu,
	},
	services: {},
});

const scheduleService = new ScheduleService({
	db: {
		Schedule,
	},
	services: {},
});

const userService = new UserService({
	db: {
		User,
		Client,
		Provider,
	},
	services: { menuService, scheduleService },
});

// Export the service object
module.exports = {
	userService,
};
