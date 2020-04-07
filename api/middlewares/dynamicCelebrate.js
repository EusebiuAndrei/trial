const { userService } = require('../../services/index');
const { celebrate } = require('celebrate');
const {
	clientValidationSchema,
	providerValidationSchema,
} = require('../../models/index');

const dynamicCelebrate = (req, res, next) => {
	const { user } = req.data;
	const userData = user[0];
	const isFirstVisit = userData.__v ? true : false;
	if (userData.role === 'Client') {
		return celebrate({
			body: clientValidationSchema(true),
		});
	} else {
		return celebrate({
			body: providerValidationSchema(true),
		});
	}
};

module.exports = dynamicCelebrate;
