const User = require('./user/index');
const userValidationSchema = require('./user/validator');
const Client = require('./client/index');
const clientValidationSchema = require('./client/validator');
const Schedule = require('./schedule/index');
const scheduleValidationSchema = require('./schedule/validator');
const Provider = require('./provider/index');
const providerValidationSchema = require('./provider/validator');

module.exports = {
	User,
	Client,
	Schedule,
	Provider,
	providerValidationSchema,
	userValidationSchema,
	clientValidationSchema,
	scheduleValidationSchema,
};
