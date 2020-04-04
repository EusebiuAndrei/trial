const mongoose = require('mongoose');

const providerSchema = mongoose.Schema({
	location: {
		//locatia pe gps si adresa, daca n-are gps adresa e obligatorie
		latitude: {
			type: Number,
		},
		longitude: {
			type: Number,
		},
		adresa: {
			type: String,
			required: true,
			min: 4,
		},
	},

	description: {
		type: String,
		required: false, //recomandat
	},

	images: {
		type: Buffer,
		required: false, //recomandat
	},

	menu: {
		type: mongoose.Types.ObjectId,
		required: true,
	},

	tables: {
		type: Number,
		required: true,
	},

	rating: {
		type: Number,
		required: true,
	},

	priceCategory: {
		type: String, //affordable,medium,expensive
		enum: ['Affordable', 'Medium', 'Expensive'],
		required: true,
	},

	locationType: {
		type: String,
		enum: ['Restaurant', 'Canteen'],
	},

	CUI: {
		type: Number,
		required: true,
	},

	specials: {
		//specialitate
		type: String,
		required: false,
	},

	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});

module.exports = providerSchema;
