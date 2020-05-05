const { Router } = require('express');
const { menuService } = require('../../services/index');

const router = Router();

router.get('/', async (req, res) => {
	const result = await menuService.getMenus(req.query);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.get('/:idCourse', async (req, res) => {
	const { idProvider, idCourse } = req.params;
	const result = await menuService.getCourse({
		idCourse,
	});
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});
module.exports = router;
