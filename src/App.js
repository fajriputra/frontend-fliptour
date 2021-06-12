import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import BounceLoader from "react-spinners/BounceLoader";

import "assets/scss/styles.scss";

import GuardRoute from "components/GuardRoute/GuardRoute";
// import { GET_TOKEN } from "store/actionTypes";
import { userLogin, fetchUser, fetchGetUser } from "store/actions/auth";

const LandingPage = React.lazy(() =>
  import("containers/LandingPage/LandingPage")
);
const DetailsPage = React.lazy(() =>
  import("containers/DetailsPage/DetailsPage")
);
const Activate = React.lazy(() => import("containers/Activate/Activate"));
const Checkout = React.lazy(() => import("containers/Checkout/Checkout"));
const Login = React.lazy(() => import("containers/Login/Login"));
const Register = React.lazy(() => import("containers/Register/Register"));
const ForgotPassword = React.lazy(() =>
  import("containers/ForgotPassword/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("containers/ResetPassword/ResetPassword")
);
const Logout = React.lazy(() => import("containers/Logout/Logout"));
const Error = React.lazy(() => import("containers/Error/Error"));

function App() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post(
          `${process.env.REACT_APP_HOST}/auth/refresh_token`,
          null
        );
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(userLogin());

        return fetchUser(token).then((res) => {
          dispatch(fetchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <React.Suspense
      fallback={
        <div
          className="text-center d-flex flex-column justify-content-center align-items-center"
          style={{
            margin: "20% auto",
          }}
        >
          <BounceLoader color="#f68247" />
          <br />
          Wait a while...
        </div>
      }
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />{" "}
            <Route exact path="/properties/:id" component={DetailsPage} />
            <GuardRoute exact path="/checkout">
              <Checkout />
            </GuardRoute>
            <Route exact path="/register" component={Register} />{" "}
            <Route exact path="/login" component={Login} />{" "}
            <Route exact path="/forgot" component={ForgotPassword} />{" "}
            <Route exact path="/auth/reset/:token" component={ResetPassword} />{" "}
            <GuardRoute exact path="/logout">
              <Logout />
            </GuardRoute>
            <Route
              exact
              path="/auth/activate/:activation_token"
              component={Activate}
            />{" "}
            <Route exact path="*" component={Error} />{" "}
          </Switch>{" "}
        </Router>{" "}
        <ToastContainer />
      </div>{" "}
    </React.Suspense>
  );
}

export default App;
