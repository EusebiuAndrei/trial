const Resize = require('./Resize');
const imagePath = './public/images';
const mongoose = require('mongoose');

class ImageService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async uploadOneImage(buffer, hostname, userId) {
		try {
			const fileUpload = new Resize(imagePath);
			const filename = await fileUpload.save(buffer);
			const newPath = `http://${hostname}/images/${filename}`;

			await this.db.Client.updateOne(
				{ userId },
				{ $set: { avatar: uploadedImages } },
			);

			return { success: true, name: { newPath } };
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}

	async uploadMultipleImages(files, hostname, userId) {
		try {
			const uploadedImages = [];
			const fileUpload = new Resize(imagePath);
			for (const buffers of files) {
				const filename = await fileUpload.save(
					buffers.buffer,
				);
				const newPath = `http://${hostname}/images/${filename}`;
				await uploadedImages.push(newPath);
			}

			console.log(uploadedImages);

			await this.db.Provider.updateOne(
				{ userId },
				{ $push: { images: uploadedImages } },
			);

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

	async uploadMenuPhoto(buffer, hostname, providerId, courseId) {
		try {
			const fileUpload = new Resize(imagePath);
			const filename = await fileUpload.save(buffer);
			const newPath = `http://${hostname}/images/${filename}`;

			//trebuie salvat in baza de date de la manu poza

			return { success: true, name: { newPath } };
		} catch (error) {
			return {
				success: false,
				error: 'Please provide a valid image!',
			};
		}
	}
}

module.exports = ImageService;
