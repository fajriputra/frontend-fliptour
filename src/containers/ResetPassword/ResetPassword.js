import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import loginImage from "assets/images/login-image.jpg";
import iconLock from "assets/images/icons/icon-lock.svg";

import Logo from "components/Logo/Logo";
import TogglePassword from "components/TogglePassword/TogglePassword";
import Button from "components/UI/Button/Button";
import { showError, showSuccess } from "utilities/notif";
import { rules } from "containers/Register/validation";

import "containers/Login/Login.scss";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  password: "",
  password_confirmation: "",
  error: "",
  success: "",
};

export default function ResetPassword(props) {
  const [data, setData] = useState(initialState);

  const { token } = useParams();

  const history = useHistory();

  const { password, password_confirmation, error, success } = data;

  const [status, setStatus] = useState(statusList.idle);

  const { register, handleSubmit, errors, setError } = useForm();

  const [typePassword, Toggle] = TogglePassword();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, error: "", success: "" });
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
        `${process.env.REACT_APP_HOST}/auth/reset`,
        { password },
        {
          headers: { Authorization: token },
        }
      );

      setData({ ...data, error: "", success: res.data.message });

      setTimeout(() => {
        setData("");
        history.push("/login");
      }, 3000);

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.message &&
        setData({ ...data, error: err.response.data.message, success: "" });
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
              Reset Your Password
            </h1>
            {error && showError(error)}
            {success && showSuccess(success)}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group position-relative">
                <input
                  type={typePassword}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="New Password"
                  ref={register(rules.password)}
                  onChange={handleChange}
                />
                <img className="icon" src={iconLock} alt="icon lock" />
                <span className="password-toggle-icon">{Toggle}</span>
                <p className="error-helper">{errors.password?.message}</p>
              </div>
              <div
                className="form-group position-relative"
                style={{ marginBottom: 40 }}
              >
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

              <div className="text-center">
                <Button
                  className="btn w-100"
                  hasShadow
                  isPrimary
                  isLoading={status === "process"}
                >
                  Reset password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
