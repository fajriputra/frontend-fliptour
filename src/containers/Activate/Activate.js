import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";
import { showError, showSuccess } from "utilities/notif";

const Activate = () => {
  const { activation_token } = useParams();

  const [err, setErr] = useState("");

  const [success, setSuccess] = useState("");

  const welcomeSuccess = () => {
    return (
      <h5 className="mb-4" style={{ lineHeight: "1.68em" }}>
        Welcome, You've join with FliptourID. <br />
        Let's click the button below to login
      </h5>
    );
  };

  const expiredToken = () => {
    return (
      <h5 className="mb-4" style={{ lineHeight: "1.68em" }}>
        Oops, Your email has been activated before. <br />
        Let's click the button below to login
      </h5>
    );
  };

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_HOST}/auth/activation`,
            { activation_token }
          );
          setSuccess(res.data.message);
        } catch (err) {
          err.response.data.message && setErr("Your token already used.");
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <section className="container" style={{ margin: "5% auto" }}>
      <div className="logo d-flex justify-content-center mb-5">
        <Logo />
      </div>
      <div className="text-center">
        <div className="col-sm-4 mx-auto mb-3">
          {err && showError(err)}
          {success && showSuccess(success)}
        </div>

        {success && welcomeSuccess()}
        {err && expiredToken()}

        <Button className="btn btn-primary" type="link" href="/login">
          Login
        </Button>
      </div>
    </section>
  );
};

export default Activate;
