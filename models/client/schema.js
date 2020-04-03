const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	preferences: [String],
	allergies: {
		type: [String],
		required: false,
	},
	//we'll use google maps api
	location: {
		type: String,
		required: false,
		min: {
			country: {
				type: String,
			},
			city: {
				type: String,
			},
			street: {
				type: String,
			},
			number: {
				type: Number,
			},
		},
	},
	avatar: {
		type: Buffer,
		required: false,
	},
	commandsHistory: [String],
	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	money: { type: Number },
});

module.exports = clientSchema;
