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

const menus = async () => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { menus },
      },
    } = await axios({
      method: "get",
      url: `http://localhost:4000/api/menus/`,
    });

    return { success: true, menus };
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
      data: {
        userData,
      },
    });
    console.log(userDetails);
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

export { profile, menus, login, getUser, getAllUsers };