const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: [String],
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	ingredients: {
		type: [String],
	},
	allergenes: {
		type: [String],
	},
	idProvider: {
		type: mongoose.Types.ObjectId,
		require: true,
	},
});

module.exports = menuSchema;
