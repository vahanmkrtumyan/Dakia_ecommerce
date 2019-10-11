import React from "react";
import "../assets/styles/drawerButton.scss";

const DrawerButton = ({ onOpen }) => {
  return (
    <div className="toggle-button" onClick={() => onOpen()}>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
    </div>
  );
};

export default DrawerButton;
