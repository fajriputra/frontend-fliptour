import React from "react";

import Button from "components/UI/Button/Button";

import "./Chatting.scss";

export default function Chatting() {

  const phone = "6289678013979";
  const text = `Hallo, Perkenalkan saya ...`;

  return (
    <>
      <Button
        className="whatsappChat"
        type="link"
        href={`https://api.whatsapp.com/send/?phone=${phone}&text=${text}&app_absent=0`}
        isExternal
        target="_blank"
      >
        <div className="whatsapp-image"></div>
      </Button>
    </>
  );
}
