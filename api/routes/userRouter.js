const { Router } = require('express');
const { celebrate } = require('celebrate');
const { userService } = require('../../services/index');
const { auth, upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const sharp = require('sharp');
//const upload = imageService.uploadImg();
const uuid = require('uuid');
const Logger = require('../../loaders/logger');
// validation schemas
const { userValidationSchema } = require('../../models/index');

const router = Router();

const path = require('path');

router.post('/upload', upload.single('image'), async (req, res) => {
	const imagePath = path.join(__dirname, '/public/images');
	const fileUpload = new Resize(imagePath);
	if (!req.file) {
		res.status(401).json({ error: 'Please provide an image' });
	}
	const filename = await fileUpload.save(req.file.buffer);
	return res.status(200).json({ name: filename });
});

//image routs here we've made the tests.
router.post(
	'/uploadSingle',
	upload.single('image'),
	async (req, res) => {
		if (!req.file) {
			res.status(401).json({
				error: 'Please provide an image',
			});
		} else {
			await sharp(req.file.path)
				.resize({
					width: 300,
					height: 300,
					fit: sharp.fit.inside,
					withoutEnlargement: true,
				})
				.toFile('./public/images/' + uuid.v4() + '.png');
		}

		return res.status(200).json({ name: req.file });
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
