const jwt = require('jsonwebtoken');
const config = require('../config/index');
const Logger = require('../loaders/logger');

class UserService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getTest() {
		try {
			const client = await this.db.Client.find({
				_id: '5e8f52dddcdbbe3a702b4130',
			});

			const user = await this.db.User.find({
				_id: '5e87b028ed2e6d4073748270',
			});

			return { success: true, data: { user, client } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getAllUsers() {
		try {
			const users = await this.db.User.find({});

			return { success: true, data: { users } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async register(payload) {
		const { email, password } = payload;
		const userData = { email, password };
		const user = new this.db.User(userData);


		try {
			await user.save();
			await user.generateEmailToken();

			return { success: true, data: { user } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async login(payload) {
		const { email, password } = payload;

		try {
			const user = await this.db.User.findByCredentials(
				email,
				password,
			);

			return { success: true, data: { user, token } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async confirmEmail(payload){

		Logger.warn(payload);
		return {success:true , data:"nothing"}
	}

	async authorize(token) {
		try {
			const { _id } = jwt.verify(token, config.jwtSecret);
			const user = await this.db.User.find({
				_id,
				'tokens.token': token,
			});

			if (!user) {
				throw new Error('Not authorized');
			}

			return { success: true, data: { token, user } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async deleteAll() {
		try {
			const users = await this.db.User.deleteMany({});

			return { success: true, data: { users } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = UserService;
