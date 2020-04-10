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
		// Jimp.read(file, function (err, image) {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		image.write(file.originalname + '.png');
		// 	}
		// });
		cb(null, true);
	} else if (file.mimetype === 'image/jpg') {
		// Jimp.read(file, function (err, image) {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		image.write(file.originalname + '.png');
		// 	}
		// });
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

class ImageService {
	constructor({ services }) {
		this.services = services;
	}

	uploadImg(req) {
		try {
			this.upload.single(req);

			return { message: upload.originalname };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ImageService;
