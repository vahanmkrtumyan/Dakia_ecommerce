import React from 'react';
import '../assets/styles/backDrop.scss';

const BackDrop = ({ show, onOpen }) => {
  return show ? (
    <div className="backdrop" onClick={() => onOpen()}></div>
  ) : null;
};

export default BackDrop;
