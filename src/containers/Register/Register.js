import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import loginImage from "assets/images/login-image.jpg";
import iconProfile from "assets/images/icons/icon-profile.svg";
import iconEmail from "assets/images/icons/icon-email.svg";
import iconLock from "assets/images/icons/icon-lock.svg";
// import iconGoogle from "assets/images/icons/icon-google.svg";

import "./Register.scss";
import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";

import TogglePassword from "components/TogglePassword/TogglePassword";

import { showSuccess, showError } from "utilities/notif";

import { rules } from "./validation";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  error: "",
  success: "",
};

function Register() {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);
  const [typePassword, Toggle] = TogglePassword();
  const { name, email, password, password_confirmation, error, success } = user;

  const history = useHistory();

  const { register, handleSubmit, errors, setError } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, success: "" });
  };

  const onSubmit = async () => {
    setStatus(statusList.process);
    if (password !== password_confirmation) {
      return setError(
        "password_confirmation",
        {
          type: "equality",
          message: "Password doesn't match",
        },
        setStatus(statusList.idle)
      );
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      setUser({ ...user, error: "", success: res.data.message });

      setTimeout(() => {
        setUser("");
        history.push("/login");
      }, 3000);

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

  useEffect(() => {
    document.title = "Fliptour | Register";
    window.scrollTo(0, 0);
  });

  return (
    <section className="register-page">
      <div className="row my-0 mx-0">
        <div className="col py-0 px-0">
          <div className="full-width">
            <img src={loginImage} alt="banner login" className="img-cover" />
          </div>
        </div>
        <div className="col sign-up px-0">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <Logo />
            </div>
            <h1 className="h2 text-center" style={{ margin: "48px auto" }}>
              Sign Up to your account
            </h1>
            {error && showError(error)}
            <div className="alert-wrapper" style={{ width: 350 }}>
              {success && showSuccess(success)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group position-relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  ref={register(rules.name)}
                  onChange={handleChange}
                />
                <img className="icon" src={iconProfile} alt="icon profile" />
                <p className="error-helper">{errors.name?.message}</p>
              </div>
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
              <div className="form-group position-relative">
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
              <div className="form-group position-relative">
                <input
                  type={typePassword}
                  id="password_confirmation"
                  name="password_confirmation"
                  className="form-control"
                  placeholder="Confirm Password"
                  ref={register(rules.password_confirmation)}
                  onChange={handleChange}
                />
                <img className="icon" src={iconLock} alt="icon lock" />
                <p className="error-helper">
                  {errors.password_confirmation?.message}
                </p>
              </div>

              <p className="text-center">
                By signing up, you confirm that you’ve read and accepted our{" "}
                <Button type="link" href="/user-notice">
                  User Notice
                </Button>{" "}
                and{" "}
                <Button type="link" href="/privacy">
                  Privacy Policy
                </Button>
              </p>

              <div className="text-center">
                <Button
                  type="button"
                  className="btn w-100"
                  hasShadow
                  isPrimary
                  isLoading={status === statusList.process}
                >
                  Register
                </Button>
                {/* <h2 className="h6 my-3">OR</h2>
                <Button type="link" isLight className="btn w-100" href="">
                  <img src={iconGoogle} alt="icon google" />
                  <h3 className="h6 my-0 mx-0 ml-3">Continue with google</h3>
                </Button> */}
              </div>
            </form>
            <div className="already-have-account">
              <Button type="link" href="/login">
                Already have an account? Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
