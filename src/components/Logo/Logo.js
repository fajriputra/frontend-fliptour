import React from "react";
import Button from "components/UI/Button/Button";

import LogoBrand from "assets/images/Logo.png";

function Logo(props) {
  return (
    <Button className="logo-brand" type="link" href="">
      <img src={LogoBrand} alt="LogoBrand" />
    </Button>
  );
}

export default Logo;
