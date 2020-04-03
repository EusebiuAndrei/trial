const User = require('./user/index');
const userValidationSchema = require('./user/validator');
const Client = require('./client/index');
const clientValidationSchema = require('./client/validator');
const Schedule = require('./schedule/index');
const scheduleValidationSchema = require('./schedule/validator');

module.exports = {
	User,
	Client,
	Schedule,
	userValidationSchema,
	clientValidationSchema,
	scheduleValidationSchema,
};
