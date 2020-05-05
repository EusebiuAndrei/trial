const mongoose = require('mongoose');

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

	async getClientbyId(userId) {
		try {
			const client = await this.db.User.findOne(
				{
					role: 'Client',
					_id: mongoose.Types.ObjectId(userId),
				},
				{
					id: 0,
					__v: 0,
					password: 0,
					emailToken: 0,
					confirmed: 0,
					tokens: 0,
				},
			);
			client.role = undefined;
			if (client.details) {
				client.details['__v'] = undefined;
				client.details['_id'] = undefined;
				client.details['userId'] = undefined;
			}

			return { success: true, data: { client } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ClientService;
