const mongoose = require('mongoose');
const menuSchema = require('../../menu/schema.js'); // to do
//i need clientSchema.preferences too look just like the providerSchema.courses.course ?

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
	//i don't know for sure
	//if we'll use google maps for location? i guess it should look diffrent
	//do we need separate proprieties for location
	//or do we just store it into a String?
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
					//nu sunt sigur, insa daca apare un idProvider, probabil
					//trebuie sa apara is cel putin o comanda, deci va fi required
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
