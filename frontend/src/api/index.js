import axios from 'axios';
import jwt from 'jsonwebtoken';

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
		console.log(jwt.decode(token));

		return { success: true, user };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
};

const getUser = async () => {
	try {
		const token = localStorage.getItem('userToken');
		const { _id } = jwt.decode(token);
		console.log(`http://localhost:4000/api/users/${_id}`);

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

export { login, getUser };
