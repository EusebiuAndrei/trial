const { Router } = require('express');

const router = Router();

const { userService } = require('../../services/index');

router.get('/', async (req, res) => {
	const result = await userService.getAllUsers();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

module.exports = router;
