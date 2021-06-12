import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import loginImage from "assets/images/login-image.jpg";
import iconEmail from "assets/images/icons/icon-email.svg";

import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";
import { showError, showSuccess } from "utilities/notif";
import { rules } from "containers/Login/validation";

import "containers/Login/Login.scss";
import "./ForgotPassword.scss";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  email: "",
  error: "",
  success: "",
};

export default function ForgotPassword() {
  const [data, setData] = useState(initialState);

  const { email, error, success } = data;

  const { register, handleSubmit, errors } = useForm();

  const [status, setStatus] = useState(statusList.idle);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value, error: "", success: "" });
  };

  const onSubmit = async () => {
    setStatus(statusList.process);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/auth/forgot`,
        { email }
      );

      setData({ ...data, error: "", success: res.data.message });

      setTimeout(() => {
        setData("");
      }, 3000);

      setStatus(statusList.error);
    } catch (err) {
      err.response.data.message &&
        setData({ ...data, error: err.response.data.message, success: "" });

      setTimeout(() => {
        setData("");
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
            <h1 className="h2 text-center" style={{ margin: "48px auto 0" }}>
              Forgot Your Password
            </h1>

            <div className="alert alert-info mx-auto my-4">
              Enter your <strong>email address</strong> in the field below{" "}
              <br /> to receive a link to access your reset password.
            </div>

            <div className="alert-wrapper" style={{ width: 350 }}>
              {error && showError(error)}
              {success && showSuccess(success)}
            </div>

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

              <div className="text-center">
                <Button
                  className="btn w-100"
                  hasShadow
                  isPrimary
                  isLoading={status === "process"}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
