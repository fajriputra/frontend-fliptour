import store from "store/store";

let currentAuth;

const listener = () => {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  if (currentAuth != previousAuth) {
    localStorage.getItem("auth", JSON.stringify(currentAuth));
  }
};

export const listen = () => {
  store.subscribe(listener);
};
