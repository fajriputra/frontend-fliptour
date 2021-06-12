import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GuardRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

  return (
    <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>
  );
}
