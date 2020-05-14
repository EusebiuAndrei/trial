const { Router } = require('express');
const { celebrate } = require('celebrate');
const { userService } = require('../../services/index');
const { dynamicCelebrate } = require('../middlewares/index');
const { auth } = require('../middlewares/index');
const Logger = require('../../loaders/logger');
// validation schemas
const { userValidationSchema } = require('../../models/index');
const router = Router();

// Here we have all the controllers
router.get('/', async (req, res) => {
	const result = await userService.getAllUsers();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await userService.getUserById(userId);
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post(
	'/register',
	celebrate({
		body: userValidationSchema.register,
	}),
	async function (req, res) {
		const result = await userService.register(req.body);
		const statusCode = result.success ? 201 : 400;

		res.status(statusCode).json(result);
	},
);

router.post(
	'/login',
	celebrate({
		body: userValidationSchema.login,
	}),
	async function (req, res) {
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

router.post('/changeemail', async function (req, res) {
	const result = await userService.changeEmail(req.body);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.get('/confirm:token', async (req, res) => {
	const result = await userService.confirmEmail(req.params.token);
	const statusCode = result.success ? 201 : 400;

	res.status(statusCode).json(result);
});

router.delete('/all', async (req, res) => {
	const result = await userService.deleteAll();
	const statusCode = result.success ? 200 : 400;

	res.status(statusCode).json(result);
});

router.post(
	'/accountSettings',
	auth,
	dynamicCelebrate,
	async (req, res) => {
		const result = await userService.configureUser(
			req.data,
			req.content,
		);
		const statusCode = result.success ? 200 : 403;
		res.status(statusCode).json(result);
	},
);

router.post('/profile', auth, dynamicCelebrate, async (req, res) => {
	const result = await userService.configureUser(
		req.data,
		req.content,
	);
	const statusCode = result.success ? 200 : 403;
	res.status(statusCode).json(result);
});

module.exports = router;

// All the results must have the next format
// { success: false, error } - if an error was thrown
// { success: true, data } - if all was good
// error -> an object containing the error
// data -> an object containing all the data that you're giving back as a response
