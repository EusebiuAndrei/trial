const mongoose = require('mongoose');

const providerSchema = mongoose.Schema({
	location: {
		location: {
			latitude: {
				type: Number,
			},
			longitude: {
				type: Number,
			},
		},
		adress: {
			type: String,
			required: true,
			min: 4,
		},
	},
	CUI: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ['Restaurant', 'Canteen'],
	},
	description: {
		type: String,
		required: false, // recomandat
	},
	images: {
		type: Buffer,
		required: false, // recomandat
	},
	rating: {
		type: Number,
		required: true,
	},
	priceCategory: {
		type: String,
		enum: ['Affordable', 'Medium', 'Expensive'],
		required: true,
	},
	specials: {
		// specialitate
		type: [String],
		required: false,
	},
	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	tables: {
		type: Number,
		required: true,
	},
});

module.exports = providerSchema;
