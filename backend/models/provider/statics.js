// Create functions that will represent schema statics
const findByTags = async function (tags) {
	let filter = {};
	if (tags.length) {
		filter = { specials: { $all: tags } };
	}
	return this.find(filter);
};

module.exports = {
	// Put them all here
	findByTags,
};
