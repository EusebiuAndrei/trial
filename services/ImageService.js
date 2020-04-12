const Resize = require('./Resize');

class ImageService {
	constructor({ services }) {
		this.services = services;
	}

	async uploadImage(req) {
		try {
			const imagePath = './public/images';
			const fileUpload = new Resize(imagePath);
			if (!req.file) {
				return {
					success: false,
					error: 'Please provide an image!',
				};
			}
			const filename = await fileUpload.save(req.file.buffer);
			return {
				succes: true,
				name: filename,
			};
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}
}

module.exports = ImageService;
