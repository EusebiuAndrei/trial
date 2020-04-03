const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		min: 15,
	},
	password: {
		type: String,
		required: true,
		min: 10,
	},
	name: {
		type: String,
		required: true,
		min: 10,
	},
	role: {
		type: String,
		enum : ['user','provider'],
		lowercase: true 
	   },
	},
	
	confirmed {
		type: Boolean,
		required: true,
	},
	
	emailToken: {
		type: String;
	},
	
	tokens: [
		{
			token: {
				type: String,
			},
		},
	],
  
	module.exports = userSchema;