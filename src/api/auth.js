import axios from "axios";

export const registerUser = async (data) => {
  return await axios.post(`${process.env.REACT_APP_HOST}/auth/register`, data);
};

export const login = async (email, password) => {
  return await axios.post(`${process.env.REACT_APP_HOST}/auth/login`, {
    email,
    password,
  });
};

export const logout = async () => {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios
    .post(`${process.env.REACT_APP_HOST}/auth/logout`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.removeItem("auth");
      return response;
    });
};
