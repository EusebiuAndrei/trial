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
					_id: 0,
					__v: 0,
					password: 0,
					role: 0,
					emailToken: 0,
					confirmed: 0,
					tokens: 0,
				},
			);

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
