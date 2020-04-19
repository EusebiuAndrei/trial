const { Router } = require('express');
const { menuService } = require('../../services/index');
const Logger = require('../../loaders/logger');

const { menuValidationSchema } = require('../../models/index');

const router = Router();

router.get('/', async (req, res) => {
	const result = await menuService.getMenus(req.query);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

module.exports = router;
