class UserService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getAllUsers() {
		try {
			const users = await this.db.User.find({});

			return { success: true, users };
		} catch (error) {
			return { success: false, error };
		}
	}
}

module.exports = UserService;
