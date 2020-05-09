const { Router } = require('express');
const { upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const multer = require('multer');
const path = require('path');

const router = Router();

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
	upload.single('myImage'),
	async (req, res) => {
		const result = await imageService.uploadOneImage(
			req.file.buffer,
			req.headers.host,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

router.post(
	'/uploadMultiple',
	upload.array('myImage', 5),
	async (req, res) => {
		console.log(req.files);
		const result = await imageService.uploadMultipleImages(
			req.files,
			req.headers.host,
		);
		const statusCode = result.success ? 200 : 400;
		console.log(result);
		res.status(statusCode).json(result);
	},
);

module.exports = router;
