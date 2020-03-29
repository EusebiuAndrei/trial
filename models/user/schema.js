const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		min: 6,
	},
	password: {
		type: String,
		required: true,
		min: 7,
	},
});

module.exports = userSchema;
