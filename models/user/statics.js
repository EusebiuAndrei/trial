const bcrypt = require('bcryptjs');

// Create functions that will represent schema statics
const findByCredentials = async function (email, password) {
	const user = await this.findOne({ email });

	if (!user) {
		throw new Error('Unable to login');
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error('Unable to login');
	}

	return user;
};

const findByEmailToken = async function (emailToken){
	const user = await this.findOne({emailToken});

	if(!user){
		throw new Error('Invalid email confirm session!');
	} 

	user.emailToken = "0";
	await user.save();
};

module.exports = {
	// Put them all here
	findByCredentials,
	findByEmailToken,
};
