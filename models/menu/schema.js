const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	courses: [
		{
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
			image: {
				type: Buffer,
			},
			ingredients: {
				type: [String],
			},
			allergenes: {
				type: [String],
			},
		},
	],
	idProvider: {
		type: mongoose.Types.ObjectId,
		require: true,
	},
});

module.exports = menuSchema;
