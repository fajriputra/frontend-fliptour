import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

// import { GoogleLogin } from "react-google-login";

import loginImage from "assets/images/login-image.jpg";
import iconLock from "assets/images/icons/icon-lock.svg";
import iconEmail from "assets/images/icons/icon-email.svg";
// import iconGoogle from "assets/images/icons/icon-google.svg";

import "./Login.scss";
import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";
import TogglePassword from "components/TogglePassword/TogglePassword";

import { userLogin } from "store/actions/auth";
import { rules } from "./validation";
import { showError, showSuccess } from "utilities/notif";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  email: "",
  password: "",
  error: "",
  success: "",
};

function Login(props) {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);
  const [typePassword, Toggle] = TogglePassword();
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password, error, success } = user;

  useEffect(() => {
    document.title = "Fliptour | Login";
    window.scrollTo(0, 0);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, error: "", success: "" });
  };

  const onSubmit = async () => {
    setStatus(statusList.process);

    try {
      const res = await axios.post(`${process.env.REACT_APP_HOST}/auth/login`, {
        email,
        password,
      });

      setUser({ ...user, error: "", success: res.data.message });

      localStorage.setItem("firstLogin", true);

      dispatch(userLogin());

      setTimeout(() => {
        setUser("");
        history.push("/");
      }, 2000);

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.message &&
        setUser({ ...user, error: err.response.data.message, success: "" });

      setTimeout(() => {
        setUser("");
      }, 3000);
    }
    setStatus(statusList.success);
  };

  return (
    <section className="login-page">
      <div className="row my-0 mx-0">
        <div className="col py-0 px-0">
          <div className="full-width">
            <img src={loginImage} alt="banner login" className="img-cover" />
          </div>
        </div>
        <div className="col sign-in px-0">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <Logo />
            </div>
            <h1 className="h2 text-center" style={{ margin: "48px auto" }}>
              Sign In to your account
            </h1>
            {error && showError(error)}
            {success && showSuccess(success)}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group position-relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  ref={register(rules.email)}
                  onChange={handleChange}
                />
                <img className="icon" src={iconEmail} alt="icon email" />
                <p className="error-helper">{errors.email?.message}</p>
              </div>
              <div
                className="form-group position-relative"
                style={{ marginBottom: 40 }}
              >
                <input
                  type={typePassword}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Your Password"
                  ref={register(rules.password)}
                  onChange={handleChange}
                />
                <img className="icon" src={iconLock} alt="icon lock" />
                <span className="password-toggle-icon">{Toggle}</span>
                <p className="error-helper">{errors.password?.message}</p>
              </div>

              <div className="forgotpassword">
                <Button type="link" href="/forgot">
                  Forgot Password?
                </Button>
              </div>

              <div className="text-center">
                <Button
                  className="btn w-100"
                  hasShadow
                  isPrimary
                  isLoading={status === statusList.process}
                >
                  Login
                </Button>

                <div className="dont-have-account">
                  <Button type="link" href="/register">
                    Don't have an account? Sign up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

//  <h2 className="h6 my-3">OR</h2>
//                 <GoogleLogin
//                   clientId="127511786075-17fh8ibqhfbrupqfi0r7lb90ni9a6e8b.apps.googleusercontent.com"
//                   render={(renderProps) => (
//                     <Button
//                       isLight
//                       className="btn w-100"
//                       onClick={renderProps.onClick}
//                       isDisabled={renderProps.disabled}
//                     >
//                       <img src={iconGoogle} alt="icon google" />
//                       <h3 className="h6 my-0 mx-0 ml-3">
//                         Continue with google
//                       </h3>
//                     </Button>
//                   )}
//                   onSuccess={responseGoogle}
//                   cookiePolicy="single_host_origin"
//                 />
