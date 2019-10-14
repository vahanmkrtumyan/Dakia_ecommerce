import React, { useState } from 'react';
import Nav from './nav';
import SideDrawer from './sideDrawer';
import BackDrop from './backDrop';
import './../assets/styles/index.scss';

const Layout = props => {
  const [open, setOpen] = useState(false);

  let openHandler = () => {
    setOpen(!open);
  };

  return (
    <div style={{ height: '100%' }}>
      <Nav onOpen={() => openHandler()} open={open} />
      <SideDrawer show={open} />
      <BackDrop show={open} onOpen={() => openHandler()} />
      {props.children}
    </div>
  );
};

export default Layout;
