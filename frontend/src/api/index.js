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


const uploadPhoto = async (file) => {
	try {
		const formData = new FormData();
		formData.append('myImage',file);
		
		const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        await axios.post("http://localhost:4000/api/users/uploadCozma",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });

		return { success: true };
	} catch (error) {
		return { success: false, errorMessage: error.message };
	}
}

export { login, getUser, getAllUsers, uploadPhoto };
