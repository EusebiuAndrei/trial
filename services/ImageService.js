const Jimp = require('jimp');
const sharp = require('sharp');
const uuid = require('uuid');

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
		sharp(file).resize(300, 300, {
			fit: sharp.fit.inside,
			withoutEnlargement: true,
		});
		cb(null, true);
	} else if (file.mimetype === 'image/jpeg') {
		sharp(file).resize(300, 300, {
			fit: sharp.fit.inside,
			withoutEnlargement: true,
		});
		cb(null, true);
	} else if (file.mimetype === 'image/jpg') {
		sharp(file).resize(300, 300, {
			fit: sharp.fit.inside,
			withoutEnlargement: true,
		});
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const convert = (req, res, next) => {
	Jimp.read(req.filename, function (err, image) {
		if (err) {
			console.log(err);
		} else {
			image.write(req.filename);
		}
	});
};

class ImageService {
	constructor({ services }) {
		this.services = services;
	}

	uploadImg() {
		const upload = multer({
			storage: storage,
			limits: { fileSize: 1024 * 1024 * 3 },
			fileFilter: fileFilter,
			convert: convert,
		});

		return upload;
	}
}

module.exports = ImageService;
