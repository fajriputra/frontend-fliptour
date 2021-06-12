import React from "react";

import ErrorImage from "assets/images/error.jpg";

import Button from "components/UI/Button/Button";

import "./Error.scss";

function Error() {
  return (
    <div className="wrapper row align-items-center justify-content-center text-center">
      <div>
        <div className="error-info">
          <h3 className="mb-3">404 NOT FOUND</h3>
          <p
            className="text-gray-300"
            style={{ marginBottom: 30, lineHeight: "1.68em" }}
          >
            Oops, sorry! You didn't find anything here. <br /> Let's go back to{" "}
            <Button type="link" href="">
              homepage
            </Button>
          </p>
        </div>
        <div className="image">
          <img
            src={ErrorImage}
            alt="error not found"
            className="img-fluid"
            style={{ width: 400 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Error;
