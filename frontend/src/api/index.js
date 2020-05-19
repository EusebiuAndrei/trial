import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setAuthorizationToken } from '../helpers/auth';

const login = async (email, password) => {
	try {
		const {
			data: { user, token },
		} = await axios({
			method: 'post',
			url: 'http://localhost:4000/api/users/login',
			data: {
				email,
				password,
			},
		});

		localStorage.setItem('userToken', token);

		return { success: true, user };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const lostPassword = async (email) => {
	console.log('trimit' + email);
	try {
		await axios({
			method: 'post',
			url: 'http://localhost:4000/api/users/lostpassword',
			data: {
				email,
			},
		});

		return { success: true };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const register = async (username, role, email, password) => {
	try {
		const {
			data: { user },
		} = await axios({
			method: 'post',
			url: 'http://localhost:4000/api/users/register',
			data: {
				email,
				username,
				password,
				role,
			},
		});

		//localStorage.setItem('userToken', token);

		return { success: true, user };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const getUser = async () => {
	try {
		const token = localStorage.getItem('userToken');
		const { _id } = jwt.decode(token);
		setAuthorizationToken(token);

		const {
			data: {
				data: { user },
			},
		} = await axios({
			method: 'get',
			url: `http://localhost:4000/api/users/${_id}`,
		});

		return { success: true, user };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const getAllUsers = async () => {
	try {
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);

		const {
			data: {
				data: { users },
			},
		} = await axios({
			method: 'get',
			url: `http://localhost:4000/api/users/`,
		});

		return { success: true, users };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const changeEmail = async (userData) => {
	try {
		console.log('api' + userData);
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { userDetails },
			},
		} = await axios({
			method: 'post',
			url: `http://localhost:4000/api/users/changeemail`,
			data: userData,
		});
		return { success: true, userDetails };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const changeName = async (userData) => {
	try {
		console.log('api' + userData);
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { userDetails },
			},
		} = await axios({
			method: 'post',
			url: `http://localhost:4000/api/users/changename`,
			data: userData,
		});
		return { success: true, userDetails };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const changePassword = async (userData) => {
	try {
		console.log('api' + userData);
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { userDetails },
			},
		} = await axios({
			method: 'post',
			url: `http://localhost:4000/api/users/changepassword`,
			data: userData,
		});
		return { success: true, userDetails };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const profile = async (userData) => {
	try {
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { userDetails },
			},
		} = await axios({
			method: 'post',
			url: `http://localhost:4000/api/users/profile`,
			data: userData,
		});
		console.log(userDetails);
		return { success: true, userDetails };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const uploadMenuPhoto = async (data) => {
	try {
		const formData = new FormData();
		formData.append('myImage', data.file);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		await axios
			.post(
				`http://localhost:4000/api/upload/uploadMenuPhoto/${data.idCourse}`,
				formData,
				config,
			)
			.then((response) => {
				alert('The file is successfully uploaded');
			})
			.catch((error) => {});

		return { success: true };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const uploadSingle = async (data) => {
	try {
		const formData = new FormData();
		formData.append('myImage', data.file);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		await axios
			.post(
				`http://localhost:4000/api/upload/uploadSingle/${data.userId}`,
				formData,
				config,
			)
			.then((response) => {
				alert('The file is successfully uploaded');
			})
			.catch((error) => {});

		return { success: true };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const uploadMultiple = async (data) => {
	try {
		const formData = new FormData();
		let { length } = data.file;
		for (let i = 0; i < length; i++) {
			formData.append('myImage', data.file[i]);
		}
		console.log(data.userId);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		await axios
			.post(
				`http://localhost:4000/api/upload/uploadMultiple/${data.userId}`,
				formData,
				config,
			)
			.then((response) => {
				alert('The file is successfully uploaded');
			})
			.catch((error) => {});

		return { success: true };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const addCourse = async (idMenu) => {
	try {
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { courses },
			},
		} = await axios({
			method: 'post',
			url: `http://localhost:4000/api/courses/${idMenu}`,
		});

		return { success: true, courses };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const updateCourse = async (idCourse, courseData) => {
	try {
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { userDetails },
			},
		} = await axios({
			method: 'patch',
			url: `http://localhost:4000/api/courses/${idCourse}`,
			data: courseData,
		});
		return { success: true, userDetails };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const deleteCourse = async (idCourse) => {
	try {
		const token = localStorage.getItem('userToken');
		setAuthorizationToken(token);
		const {
			data: {
				data: { courses },
			},
		} = await axios({
			method: 'delete',
			url: `http://localhost:4000/api/courses/${idCourse}`,
		});
		return { success: true, courses };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

export {
	register,
	login,
	getUser,
	getAllUsers,
	uploadSingle,
	uploadMultiple,
	changePassword,
	changeEmail,
	changeName,
	uploadMenuPhoto,
	profile,
	lostPassword,
	addCourse,
	updateCourse,
	deleteCourse,
};
