const path = require('path');
const Resize = require('./Resize');

class ImageService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async uploadOneImage(buffer, hostname) {
		try {
			const imagePath = './public/images';
			const fileUpload = new Resize(imagePath);
			const filename = await fileUpload.save(buffer);
			const newPath = path.join(
				hostname,
				'public',
				'images',
				filename,
			);

			return { success: true, name: { newPath } };
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}

	async uploadMultipleImages(files, hostname) {
		try {
			const uploadedImages = [];
			const imagePath = './public/images';
			const fileUpload = new Resize(imagePath);
			for (const buffers of files) {
				const filename = await fileUpload.save(
					buffers.buffer,
				);
				const newPath = path.join(
					hostname,
					'public',
					'images',
					filename,
				);
				await uploadedImages.push(newPath);
			}
			console.log(uploadedImages);
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
