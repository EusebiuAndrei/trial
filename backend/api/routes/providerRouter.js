const { Router } = require('express');
const { providerService } = require('../../services/index');
const Logger = require('../../loaders/logger');

const router = Router();

router.get('/', async (req, res) => {
	const result = await providerService.getAllProviders();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/specials', async (req, res) => {
	const limit = req.query.limit;
	let tags = req.query.special;
	if (!tags) {
		tags = [];
	} else if (!Array.isArray(tags)) {
		tags = [tags];
	}
	const result = await providerService.getBySpecials(limit, tags);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await providerService.getProviderById(userId);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

module.exports = router;
