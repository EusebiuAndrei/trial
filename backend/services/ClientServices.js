class ClientService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getClients() {
		try {
			const clients = await this.db.User.find(
				{ role: 'Client' },
				{
					id: 0,
					__v: 0,
					password: 0,
					emailToken: 0,
					confirmed: 0,
					tokens: 0,
				},
			);

			clients.forEach(function (elem) {
				elem.role = undefined;
				if (elem.details != null) {
					elem.details.__v = undefined;
					elem.details._id = undefined;
					elem.details.userId = undefined;
				}
			});
			return { success: true, data: { clients } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ClientService;
