const Resize = require('./Resize');

class ImageService {
	constructor({ services }) {
		this.services = services;
	}

	async uploadImage(req) {
		try {
			const imagePath = './public/images';
			const fileUpload = await new Resize(imagePath);
			const filename = await fileUpload.save(req.file.buffer);
			return { success: true, data: { filename } };
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}
}

module.exports = ImageService;
