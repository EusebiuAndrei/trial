const { Router } = require('express');
const { upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const { auth } = require('../middlewares/index');

const router = Router();

function setResponseStatus(successCode, failureCode, ok) {
	return ok ? successCode : failureCode;
}

router.post(
	'/uploadSingle/:userId',
	auth,
	upload.single('myImage'),
	async (req, res) => {
		const { userId } = req.params;
		const result = await imageService.uploadOneImage(
			req.file.buffer,
			req.headers.host,
			userId,
		);
		console.log(result);
		res.status(result.success ? 201 : 400).json(result);
	},
);

router.post(
	'/uploadMultiple/:userId',
	auth,
	upload.array('myImage', 5),
	async (req, res) => {
		const { userId } = req.params;
		const result = await imageService.uploadMultipleImages(
			req.files,
			req.headers.host,
			userId,
		);
		console.log(result);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

module.exports = router;
