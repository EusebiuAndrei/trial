const jwt = require('jsonwebtoken');
const config = require('../config/index');
const Logger = require('../loaders/logger');
const { menuService, scheduleService } = require('./index');

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

	async getUserById(id) {
		try {
			const user = await this.db.User.findOne({ _id: id });

			return { success: true, data: { user } };
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
			await this.services.sendEmailService.sendConfirmEmail(
				user.emailToken,
				user.email,
			);

			return { success: true, data: { user } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async lostPassword(payload) {
		const { email } = payload;
		try {
			const user = await this.db.User.findByEmail(email);
			const password = await user.generateNewPassword();
			await this.services.sendEmailService.sendNewPassword(
				password,
				user.email,
			);

			return {
				success: true,
				message: 'O parola noua a fost trimisa pe email!',
			};
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async changePassword(payload) {
		const {
			email,
			currentPass,
			newPass,
			confirmNewPass,
		} = payload;
		try {
			const user = await this.db.User.findByEmail(email);
			await user.changePassword(
				currentPass,
				newPass,
				confirmNewPass,
			);
			return {
				success: true,
				message: 'Parola a fost schimbata!',
			};
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
			return { success: true, token, user };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async logout(token) {
		try {
			await this.db.User.updateOne(
				{
					'tokens.token': token,
				},
				{
					$set: {
						'tokens.$.token': 0,
					},
				},
			);

			return {
				success: true,
				data: 'Logged out successfully.',
			};
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async confirmEmail(payload) {
		try {
			await this.db.User.findByEmailToken(payload);

			return {
				success: true,
				data: "You've successfully confirmed your email!",
			};
		} catch (error) {
			return {
				succes: false,
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
			// if (!this.isRegistrationConfirmed(user)) {
			// 	throw new Error('Not confirmed');
			// }
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

	async configureUser(userData, payload) {
		const { user } = userData;
		const { role, _id: userId } = user[0];
		try {
			const { menu, schedule } = payload;
			delete payload['menu'];
			delete payload['schedule'];

			const data = { ...payload, userId };

			const condition = { userId };
			const options = {
				upsert: true,
				new: true,
				useFindAndModify: false,
			};
			let userDetails = await this.db[role].findOneAndUpdate(
				condition,
				data,
				options,
			);

			if (role === 'Provider') {
				let outsideData = {};
				if (menu) {
					const menuProvider = await this.services.menuService.create(
						menu,
						userDetails._id,
					);
					const { _id: menuId } = menuProvider.data;
					outsideData = { menuId };
				}
				if (schedule) {
					const scheduleProvider = await this.services.scheduleService.create(
						{ schedule },
						userDetails._id,
					);
					const { _id: scheduleId } = scheduleProvider.data;
					outsideData += { scheduleId };
				}
			}

			const userNow = await this.db.User.findOne({
				_id: userId,
			});

			return { success: true, data: { userDetails } };
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
