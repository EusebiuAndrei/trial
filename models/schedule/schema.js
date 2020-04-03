const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
	schedule: [
		{
			day: {
				type: String,
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
