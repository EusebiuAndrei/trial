const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
// const jobsLoader = require('./jobs');
// const Logger = require('./logger');

// require('./events');
// gdsafd
module.exports = async ({ expressApp }) => {
	try {
		await mongooseLoader();
		console.log('DB loaded and connected!');
		// Logger.info('✌️ DB loaded and connected!');

		// await jobsLoader({ agenda });
		// Logger.info('✌️ Jobs loaded');

		await expressLoader(expressApp);
		console.log('Express loaded');
		// Logger.info('✌️ Express loaded');
	} catch (error) {
		console.log('ERROR: ', error);
	}
};
