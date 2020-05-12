const { Router } = require('express');
const { upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const path = require('path');
const { auth } = require('../middlewares/index');

const router = Router();

router.post(
	'/uploadSingle',
	auth,
	upload.single('myImage'),
	async (req, res) => {
		const { token } = req.data;
		const result = await imageService.uploadOneImage(
			req.file.buffer,
			req.headers.host,
			token,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

router.post(
	'/uploadMultiple',
	auth,
	upload.array('myImage', 5),
	async (req, res) => {
		const { token } = req.data;
		const result = await imageService.uploadMultipleImages(
			req.files,
			req.headers.host,
			token,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

module.exports = router;
