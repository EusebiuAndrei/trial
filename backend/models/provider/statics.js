// Create functions that will represent schema statics
const findByTags = async function (limit, tags) {
	let filter = {};
	if (tags.length) {
		filter = { specials: { $all: tags } };
	}
	const query = this.find(filter);

	// if (limit) {
	// 	query.limit(limit);
	// }

	return query.exec();
};

module.exports = {
	// Put them all here
	findByTags,
};
