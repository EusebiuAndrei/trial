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

const uploadMultiple = async (buffers) => {
  try {
    const token = localStorage.getItem("userToken");
    const { _id } = jwt.decode(token);
    setAuthorizationToken(token);

    const {
      data: { name },
    } = await axios({
      method: "post",
      url: `http://localhost:4000/api/users/uploadMultiple`,
      data: {
        buffers,
      },
    });

    return { success: true, name };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

export { login, getUser, getAllUsers, uploadMultiple };
