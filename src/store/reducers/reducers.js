import { combineReducers } from "redux";
import checkout from "./checkout";
import page from "./page";
import auth from "./auth";
import token from "./token";

export default combineReducers({
  checkout,
  page,
  auth,
  token,
});
