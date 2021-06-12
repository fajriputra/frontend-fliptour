import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import BounceLoader from "react-spinners/BounceLoader";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  });

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{ margin: "20% auto" }}
    >
      <BounceLoader color="#f68247" />
      <br />
      Logging out ...
    </div>
  );
};

export default Logout;
