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

router.post('/:idMenu', async (req, res) => {
	const { idMenu } = req.params;
	console.log(idMenu);
	const result = await courseService.addCourse(idMenu);
	const statusCode = result.success ? 201 : 400;
	res.status(statusCode).json(result);
});

router.patch('/:idCourse', async (req, res) => {
	const { idCourse } = req.params;
	console.log(req.body);
	console.log(idCourse);
	const result = await courseService.updateCourse(
		idCourse,
		req.body,
	);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});
module.exports = router;
