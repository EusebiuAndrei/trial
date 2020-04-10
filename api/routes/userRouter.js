const { Router } = require('express');
const { celebrate } = require('celebrate');
const { userService } = require('../../services/index');
const { auth } = require('../middlewares/index');
const uuid = require('uuid');
const Jimp = require('jimp');

const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/images/');
	},
	filename: function (req, file, cb) {
		cb(null, uuid.v4() + '.png');
	},
});

const fileFilter = (req, file, cb) => {
	//reject a file
	if (file.mimetype === 'image/png') {
		cb(null, true);
	} else if (file.mimetype === 'image/jpeg') {
		Jimp.read(file, function (err, image) {
			if (err) {
				console.log(err);
			} else {
				image.write(file.originalname + '.png');
			}
		});
		cb(null, true);
	} else if (file.mimetype === 'image/jpg') {
		Jimp.read(file, function (err, image) {
			if (err) {
				console.log(err);
			} else {
				image.write(file.originalname + '.png');
			}
		});
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 3 },
	fileFilter: fileFilter,
});

const Logger = require('../../loaders/logger');
// validation schemas
const { userValidationSchema } = require('../../models/index');

const router = Router();

//the ImageService exists and contains this, but could't make it work using upload.single();
//image rout here we've made the tests.
router.post('/upload', upload.single('image'), (req, res, next) => {
	console.log(req.file);
});

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
