const Resize = require('./Resize');
const imagePath = './public/images';

class ImageService {
	constructor({ services }) {
		this.services = services;
	}

	async uploadOneImage(buffer) {
		try {
			const fileUpload = new Resize(imagePath);
			const filename = await fileUpload.save(buffer);
			return { success: true, name: { filename } };
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}

	async uploadMultipleImages(files) {
		try {
			const uploadedImages = [];
			const fileUpload = new Resize(imagePath);
			files.forEach(async (buffers) => {
				const filename = await fileUpload.save(
					buffers.buffer,
				);
				await uploadedImages.push(filename);
			});
			return {
				success: true,
				name: JSON.stringify(uploadedImages),
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
