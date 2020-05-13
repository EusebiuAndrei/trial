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
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
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
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

router.post(
	'/uploadMenuPhoto/:providerId/:courseId',
	auth,
	upload.single('myImage'),
	async (req, res) => {
		const { providerId, courseId } = req.params;
		console.log(providerId);
		//console.log(req.file);
		const result = await imageService.uploadMenuPhoto(
			req.file.buffer,
			req.headers.host,
			providerId,
			courseId,
		);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

module.exports = router;
