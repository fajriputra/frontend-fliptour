import React, { useState } from "react";

import EyeSlash from "assets/images/icons/icon-hide.svg";
import Eye from "assets/images/icons/icon-show.svg";

const TogglePassword = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <img
      src={visible ? `${Eye}` : `${EyeSlash}`}
      onClick={() => setVisiblity((visiblity) => !visiblity)}
      alt="toggle password"
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default TogglePassword;
