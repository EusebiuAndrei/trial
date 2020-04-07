const { Joi } = require('celebrate');
// const joiObjectId = require('joi-objectid');

// // add joi-objectId to Joi
// Joi.objectId = joiObjectId(Joi);

schema = (firstChange) => {
	if (firstChange)
		return Joi.object().keys({
			prefferences: Joi.array().items(Joi.string().required()),
			allergies: Joi.string(),
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90).required(),
				longitude: Joi.number().min(-180).max(180).required(),
			}),
			avatar: Joi.required(),
		});
	else
		return Joi.object().keys({
			prefferences: Joi.array().items(Joi.string()),
			allergies: Joi.string(),
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90),
				longitude: Joi.number().min(-180).max(180),
			}),
		});
};

module.exports = schema;
