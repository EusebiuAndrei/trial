const { Joi } = require('celebrate');
// const joiObjectId = require('joi-objectid');

// // add joi-objectId to Joi
// Joi.objectId = joiObjectId(Joi);

const schema = (firstChange) => {
	if (firstChange)
		return Joi.object().keys({
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90).required(),
				longitude: Joi.number().min(-180).max(180).required(),
				address: Joi.string().required(),
			}),
			CUI: Joi.required().regex(
				/^[.]?U[.]?I[.]?[ ]?R?O?[ ]?[0-9]{6,8}/,
			),
			type: Joi.require().valid('Restaurant', 'Canteen'),
			description: Joi.required().string(),
			rating: Joi.required(),
			priceCategory: Joi.required().valid(
				'Affordable',
				'Medium',
				'Expensive',
			),
			specials: Joi.array().items(Joi.string().required()),
			tables: Joi.number().required(),
		});
	else
		return Joi.object().keys({
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90),
				longitude: Joi.number().min(-180).max(180),
				address: Joi.string(),
			}),
			CUI: Joi.regex(/^[.]?U[.]?I[.]?[ ]?R?O?[ ]?[0-9]{6,8}/),
			type: Joi.valid('Restaurant', 'Canteen'),
			description: Joi.string(),
			priceCategory: Joi.valid(
				'Affordable',
				'Medium',
				'Expensive',
			),
			specials: Joi.array().items(Joi.string()),
			tables: Joi.number(),
		});
};

module.exports = schema;
