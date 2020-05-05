class ProviderService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getBySpecials(limit, special) {
		try {
			let providers = [];
			providers = await this.db.User.find({
				role: 'Provider',
			});

			special.forEach((element) => {
				console.log(element);
			});

			providers = providers.filter(function (value) {
				let { details } = value;
				if (details != null) {
					let { specials } = details;
					let ok = 1;
					if (
						specials != null &&
						specials.length == special.length
					) {
						specials.forEach((element1, index) => {
							const element2 = special[index];
							if (element1 != element2) {
								ok = 0;
							}
						});
					} else {
						ok = 0;
					}
					if (ok == 1) {
						console.log(details);
						return details;
					}
				}
			});

			return { success: true, data: { providers } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getProviderById(id) {
		try {
			const provider = await this.db.User.findOne({
				role: 'Provider',
				_id: id,
			});

			return { success: true, data: { provider } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getAllProviders() {
		try {
			const providers = await this.db.User.find({
				role: 'Provider',
			});

			return { success: true, data: { providers } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ProviderService;
