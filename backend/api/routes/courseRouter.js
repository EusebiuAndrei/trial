const { Router } = require('express');
const { courseService } = require('../../services/index');

const router = Router();

router.get('/', async (req, res) => {
	const result = await courseService.getCourses(req.query);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.get('/:idCourse', async (req, res) => {
	const { idCourse } = req.params;
	const result = await courseService.getCourse({
		idCourse,
	});
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});
module.exports = router;
