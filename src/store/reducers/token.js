import { GET_TOKEN } from "store/actionTypes";

const token = "";

export default function (state = token, action) {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
