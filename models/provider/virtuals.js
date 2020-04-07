module.exports = (schema) => {
	// Add virtual fields to schema
	schema.virtual('menu', {
		path: 'Menu',
		localField: '_id',
		foreignField: 'providerId',
		justOne: true,
		autopopulate: true,
	});
	schema.virtual('schedule', {
		path: 'Menu',
		localField: '_id',
		foreignField: 'providerId',
		justOne: true,
		autopopulate: true,
	});
};
