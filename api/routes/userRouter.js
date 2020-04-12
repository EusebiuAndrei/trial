const { Router } = require('express');
const { celebrate } = require('celebrate');
const { userService } = require('../../services/index');
const { auth } = require('../middlewares/index');
const { imageService } = require('../../services/index');

const upload = imageService.uploadImg();

const Logger = require('../../loaders/logger');
// validation schemas
const { userValidationSchema } = require('../../models/index');

const router = Router();

//image routs here we've made the tests.
router.post(
	'/uploadSingle',
	upload.single('image'),
	async (req, res) => {
		if (!req.file) {
			res.status(401).json({
				error: 'Please provide an image',
			});
		}
		return res.status(200).json({ name: req.filename });
	},
);

router.post(
	'/uploadMultiple',
	upload.array('image', 2),
	async (req, res, next) => {
		console.log(req.file);
	},
);
// Here we have all the controllers
router.get('/', auth, async (req, res) => {
	const result = await userService.getAllUsers();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/test', async (req, res) => {
	const result = await userService.getTest();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post('/register', async function (req, res) {
	const result = await userService.register(req.body);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.post(
	'/login',
	celebrate({
		body: userValidationSchema,
	}),
	async function (req, res) {
		const result = await userService.login(req.body);
		const statusCode = result.success ? 200 : 400;

		res.status(statusCode).json(result);
	},
);

router.delete('/all', async (req, res) => {
	const result = await userService.deleteAll();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

module.exports = router;

// All the results must have the next format
// { success: false, error } - if an error was thrown
// { success: true, data } - if all was good
// error -> an object containing the error
// data -> an object containing all the data that you're giving back as a response
