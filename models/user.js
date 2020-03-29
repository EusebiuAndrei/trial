const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
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

const User = mongoose.model('User', UserSchema);

module.exports = User;
