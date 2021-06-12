import { FETCH_PAGE } from "../actionTypes";

import axios from "configs/axios/axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
