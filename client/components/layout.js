import React, { useState } from "react";
import Nav from "./nav";
import SideDrawer from "./sideDrawer";
import BackDrop from "./backDrop";

const Layout = props => {
  const [open, setOpen] = useState(false);

  let openHandler = () => {
    console.log("gsad");
    setOpen(!open);
  };

  return (
    <div style={{ height: "100%" }}>
      <Nav onOpen={() => openHandler()} />
      <SideDrawer show={open} />
      <BackDrop show={open} onOpen={() => openHandler()} />
      {props.children}
    </div>
  );
};

export default Layout;
