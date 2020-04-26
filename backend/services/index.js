// Import all the users models
const {
	User,
	Client,
	Provider,
	Menu,
	Schedule,
} = require('../models/index');

// Import all the service constructors
const SendEmailService = require('./SendEmailService');
const UserService = require('./UserService');
const MenuService = require('./MenuService');
const ScheduleService = require('./ScheduleService');
const ImageService = require('./ImageService');
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
const sendEmailService = new SendEmailService();

const userService = new UserService({
	db: {
		User,
		Client,
		Provider,
		Menu,
	},
	services: { menuService, scheduleService, sendEmailService },
});

const imageService = new ImageService({
	services: {},
});
// Export the service object
module.exports = {
	userService,
	menuService,
	scheduleService,
	imageService,
};