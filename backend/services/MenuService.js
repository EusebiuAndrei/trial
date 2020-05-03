const Logger = require('../loaders/logger');
const mongoose = require('mongoose');

class MenuService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getCourse(courseData) {
		const { idProvider, idCourse } = courseData;
		try {
			const course = await this.db.Menu.findOne({
				idProvider: mongoose.Types.ObjectId(idProvider),
				'courses._id': mongoose.Types.ObjectId(idCourse),
			});
			return { success: true, data: course };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async create(payload, providerId) {
		const menuData = { ...payload, providerId };
		const condition = { providerId };
		const options = {
			upsert: true,
			new: true,
			useFindAndModify: false,
		};

		try {
			const menu = await this.db.Menu.findOneAndUpdate(
				condition,
				menuData,
				options,
			);
			return { success: true, data: menu };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getMenus(payload) {
		try {
			const {
				limit,
				sortKey,
				price: desiredPrice,
				name: desiredName,
				category: desiredCategory,
				ingredients: desiredIngredients,
				allergenes: desiredAllergenes,
			} = payload;

			const queryValues = {
				price: desiredPrice,
				name: desiredName,
				category: desiredCategory,
				ingredients: desiredIngredients,
				allergenes: desiredAllergenes,
			};
			const query = {};
			Object.keys(queryValues).forEach(function (key) {
				if (queryValues[key])
					query['courses.' + key] = queryValues[key];
			});
			const menus = await this.db.Menu.find(query)
				.sort('courses.' + sortKey)
				.limit(parseInt(limit));

			return { success: true, data: { menus } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = MenuService;
