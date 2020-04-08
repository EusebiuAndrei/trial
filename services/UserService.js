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
				_id: '5e87b25a356bef450b818e8a',
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
			const token = await user.generateAuthToken();

			return { success: true, data: { user, token } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
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
			if (!this.isRegistrationConfirmed(user)) {
				throw new Error('Not confirmed');
			}
			return { success: true, data: { token, user } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	isRegistrationConfirmed(userData) {
		const { confirmed } = userData[0];
		return confirmed;
	}

	async configureClient(userData) {
		const { _id, payload } = userData;
		const userId = _id;
		const { preferences, allergies, location, avatar } = payload;
		const clientData = {
			preferences,
			allergies,
			location,
			avatar,
			userId,
		};
		for (var prop in clientData) {
			if (!clientData[prop]) delete clientData[prop];
		}
		const condition = { userId: _id };
		const options = {
			upsert: true,
			new: true,
			useFindAndModify: false,
		};

		try {
			const client = await this.db.Client.findOneAndUpdate(
				condition,
				clientData,
				options,
			);
			await client.save();
			return { success: true, data: { client } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async configureProvider(userData) {
		const { _id, payload } = userData;
		const userId = _id;
		const {
			location,
			adress,
			CUI,
			type,
			description,
			images,
			rating,
			priceCategory,
			specials,
			tables,
		} = payload;
		const providerData = {
			location,
			adress,
			CUI,
			type,
			description,
			images,
			rating,
			priceCategory,
			specials,
			userId,
			tables,
		};
		for (var prop in providerData) {
			if (!providerData[prop]) delete providerData[prop];
		}
		const condition = { userId: _id };
		const options = {
			upsert: true,
			new: true,
			useFindAndModify: false,
		};
		try {
			const provider = await this.db.Provider.findOneAndUpdate(
				condition,
				providerData,
				options,
			);
			await provider.save();
			return { success: true, data: { provider } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async configureUser(userData, payload) {
		const { user } = userData;
		const { role, _id } = user[0];
		try {
			if (role === 'Client') {
				const client = await this.configureClient({
					_id,
					payload,
				});
				return { success: true, data: { client } };
			}
			const provider = await this.configureProvider({
				_id,
				payload,
			});
			return { success: true, data: { provider } };
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
