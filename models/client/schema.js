const mongoose = require('mongoose');
const menuSchema = require('../../menu/schema.js'); // to do

const clientSchema = mongoose.Schema({
	preferences: [
		{
			type: menuSchema.courses,
			required: false,
		},
	],
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
	commandsHistory: [
		{
			command: {
				idProvider: {
					type: mongoose.Types.ObjectId,
					required: true,
				},
				course: {
					type: menuSchema.courses,
					required: true,
				},

				price: {
					type: Number,
					required: true,
				},
				date: {
					type: Date,
					required: true,
				},
			},
		},
	],
	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});

module.exports = clientSchema;
