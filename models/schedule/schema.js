const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
	schedule: [
		{
			day: {
				type: String,
				//zilele in romana sau engleza, daca romana, punem diacritice?
				enum: [
					'luni',
					'marti',
					'miercuri',
					'joi',
					'vineiri',
					'sambata',
					'duminica',
				],
				required: true,
				lowercase: true,
				trim: true,
				min: 3,
			},
			startHour: {
				type: String, // 10 am/pm type
				required: true,
				min: 4,
			},
			endHour: {
				type: String,
				required: true,
				min: 4,
			},
		},
	],
	idProvider: {
		type: mongoose.Types.ObjectId,
		require: true,
	},
});

module.exports = scheduleSchema;
