import { GET_USER, USER_LOGIN } from "store/actionTypes";

const initialState = {
  user: [],
  isLogged: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
