import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIlustration from "assets/images/complete-payment.jpg";

import "./Completed.scss";

function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <p>All you work done, sit back and enjoy your day</p>
            <img
              src={CompletedIlustration}
              alt="Completed Checkhout Payments"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Completed;
