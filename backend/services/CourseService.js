const Logger = require('../loaders/logger');
const mongoose = require('mongoose');

class CourseService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getCourse(courseData) {
		const { idCourse } = courseData;
		try {
			const course = await this.db.Menu.aggregate([
				{
					$unwind: '$courses',
				},
				{
					$match: {
						'courses._id': mongoose.Types.ObjectId(
							idCourse,
						),
					},
				},
				{
					$group: {
						_id: '$courses._id',
						name: { $first: '$courses.name' },
						category: { $first: '$courses.category' },
						price: { $first: '$courses.price' },
						image: { $first: '$courses.image' },
						ingredients: {
							$first: '$courses.ingredients',
						},
						allergenes: { $first: '$courses.allergenes' },
					},
				},
			]);
			return { success: true, data: course };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getCourses(payload) {
		try {
			const {
				limit,
				sortKey,
				price: desiredPrice,
				special: desiredCategory,
				ingredients: desiredIngredients,
			} = payload;

			const coursesByMenus = await this.db.Menu.find(
				{},
				'courses',
			);
			const coursesIndividualy = [];
			coursesByMenus.forEach((listOfCourses) => {
				listOfCourses.courses.forEach((course) => {
					coursesIndividualy.push(course);
				});
			});

			const coursesFiltred = coursesIndividualy
				.filter(
					(course) =>
						(desiredCategory
							? course.category.includes(
									desiredCategory,
							  )
							: 1) &&
						(desiredIngredients
							? course.ingredients.includes(
									desiredIngredients,
							  )
							: 1) &&
						(desiredPrice
							? course.price < desiredPrice
							: 1),
				)
				.sort(function (a, b) {
					return a[sortKey] - b[sortKey];
				})
				.slice(0, parseInt(limit));
			return { success: true, data: { coursesFiltred } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = CourseService;
