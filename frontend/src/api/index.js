import axios from "axios";
import jwt from "jsonwebtoken";
import { setAuthorizationToken } from "../helpers/auth";

const login = async (email, password) => {
  try {
    const {
      data: { user, token },
    } = await axios({
      method: "post",
      url: "http://localhost:4000/api/users/login",
      data: {
        email,
        password,
      },
    });

    localStorage.setItem("userToken", token);

    return { success: true, user };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const register = async (username, role, email, password) => {
  try {
    const {
      data: { user },
    } = await axios({
      method: "post",
      url: "http://localhost:4000/api/users/register",
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
    const token = localStorage.getItem("userToken");
    const { _id } = jwt.decode(token);
    setAuthorizationToken(token);

    const {
      data: {
        data: { user },
      },
    } = await axios({
      method: "get",
      url: `http://localhost:4000/api/users/${_id}`,
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const getAllUsers = async () => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);

    const {
      data: {
        data: { users },
      },
    } = await axios({
      method: "get",
      url: `http://localhost:4000/api/users/`,
    });

    return { success: true, users };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadSingle = async (file) => {
  try {
    const formData = new FormData();
    formData.append("myImage", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:4000/api/upload/uploadSingle", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadMenuPhoto = async (data) => {
  try {
    const formData = new FormData();
    console.log(data);
    formData.append("myImage", data.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post(
        `http://localhost:4000/api/upload/uploadMenuPhoto/${data.idCourse}`,
        formData,
        config
      )
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadMultiple = async (files) => {
  try {
    const formData = new FormData();
    let { length } = files;
    for (let i = 0; i < length; i++) {
      formData.append("myImage", files[i]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:4000/api/upload/uploadMultiple", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const profile = async (userData) => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "post",
      url: `http://localhost:4000/api/users/profile`,
      data: userData,
    });
    console.log(userDetails);
    return { success: true, userDetails };
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
  profile,
  uploadMenuPhoto,
};
