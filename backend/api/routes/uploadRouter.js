const { Router } = require('express');
const { upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const multer = require('multer');
const path = require('path');
const { auth } = require('../middlewares/index');

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
