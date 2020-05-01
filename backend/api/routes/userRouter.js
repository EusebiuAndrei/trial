const { Router } = require('express');
const { celebrate } = require('celebrate');
const Resize = require('../../services/Resize');
const { userService } = require('../../services/index');
const { dynamicCelebrate } = require('../middlewares/index');
const { auth, upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const Logger = require('../../loaders/logger');
// validation schemas
const { userValidationSchema } = require('../../models/index');

const router = Router();

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: './uploads/',
	filename: function (req, file, cb) {
		cb(
			null,
			'IMAGE-' + Date.now() + path.extname(file.originalname),
		);
	},
});

const myUpload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
}).single('myImage');

router.post('/uploadCozma', function (req, res) {
	myUpload(req, res, function (err) {
		console.log('Request ---', req.body);
		console.log('Request file ---', req.file);

		if (!err) {
			return res.send(200).end();
		}
	});
});

router.post(
	'/uploadSingle',
	upload.single('image'),
	async (req, res) => {
		const result = await imageService.uploadOneImage(
			req.file.buffer,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

router.post(
	'/uploadMultiple',
	upload.array('image', 2),
	async (req, res) => {
		const result = await imageService.uploadMultipleImages(
			req.files,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

// Here we have all the controllers
router.get('/', auth, async (req, res) => {
	Logger.info(JSON.stringify(req.data, null, 2));
	const result = await userService.getAllUsers();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/providers', auth, async (req, res) => {
	Logger.info(JSON.stringify(req.data, null, 2));
	const result = await userService.getAllProviders();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/providers/specials', async (req, res) => {
	const limit = req.query.limit;
	let tags = req.query.special;
	if (!tags) {
		tags = [];
	} else if (!Array.isArray(tags)) {
		tags = [tags];
	}
	const result = await userService.getBySpecials(limit, tags);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/providers/:providerId', async (req, res) => {
	const { providerId } = req.params;
	const result = await userService.getProviderById(providerId);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await userService.getUserById(userId);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/test', async (req, res) => {
	const result = await userService.getTest();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post(
	'/register',
	celebrate({
		body: userValidationSchema,
	}),
	async function (req, res) {
		const result = await userService.register(req.body);
		const statusCode = result.success ? 201 : 400;

		res.status(statusCode).json(result);
	},
);

router.post('/lostpassword', async function (req, res) {
	const result = await userService.lostPassword(req.body);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.post('/changepassword', async function (req, res) {
	const result = await userService.changePassword(req.body);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.get('/confirm:token', async (req, res) => {
	const result = await userService.confirmEmail(req.params.token);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.post(
	'/login',
	celebrate({
		body: userValidationSchema,
	}),
	async function (req, res) {
		console.log('salut');
		const result = await userService.login(req.body);
		const statusCode = result.success ? 200 : 400;
		res.status(statusCode).json(result);
	},
);

router.post('/logout', auth, async (req, res) => {
	const { token } = req.data;
	const result = await userService.logout(token);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});

router.delete('/all', async (req, res) => {
	const result = await userService.deleteAll();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post('/profile', auth, dynamicCelebrate, async (req, res) => {
	const result = await userService.configureUser(
		req.data,
		req.content,
	);
	const statusCode = result.success ? 200 : 400;
	res.status(statusCode).json(result);
});
module.exports = router;

// All the results must have the next format
// { success: false, error } - if an error was thrown
// { success: true, data } - if all was good
// error -> an object containing the error
// data -> an object containing all the data that you're giving back as a response
