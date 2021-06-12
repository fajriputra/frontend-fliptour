import axios from "axios";
import { USER_LOGIN, GET_USER } from "store/actionTypes";

export const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

export const fetchUser = async (token) => {
  const res = await axios.get(`${process.env.REACT_APP_HOST}/auth/get-user`, {
    headers: { Authorization: token },
  });
  return res;
};

export const fetchGetUser = (res) => {
  return {
    type: GET_USER,
    payload: {
      user: res.data,
    },
  };
};
