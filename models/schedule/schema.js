const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
	schedule: [
		{
			day: {
				type: String,
				required: true,
				min: 3,
			},
			startHour: {
				type: String, // 10 am/pm type
				required: true,
				min: 5,
			},
			endHour: {
				type: String,
				required: true,
				min: 5,
			},
		},
	],
	idProvider: {
		type: mongoose.Types.ObjectId,
		require: true,
	},
});

module.exports = scheduleSchema;
