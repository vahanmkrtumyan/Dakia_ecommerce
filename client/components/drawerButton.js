import React, { useState, useEffect } from 'react';
import '../assets/styles/drawerButton.scss';

const DrawerButton = ({ onOpen, open }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(open);
  }, [open]);

  console.log(menuOpen);

  const styles = {
    container: {
      height: '40px',
      width: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '8px',
      position: 'fixed',
      right: 0
    },
    line: {
      height: '2px',
      width: '31px',
      background: 'white',
      transition: 'all 0.2s ease'
    },
    lineTop: {
      transform: menuOpen ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '9px'
    },
    lineMiddle: {
      opacity: menuOpen ? 0 : 1,
      transform: menuOpen ? 'translateX(-16px)' : 'none'
    },
    lineBottom: {
      transform: menuOpen ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '9px'
    }
  };

  return (
    // <div className="toggle-button" onClick={() => onOpen()}>
    //   <div className="toggle-button_line"></div>
    //   <div className="toggle-button_line"></div>
    //   <div className="toggle-button_line"></div>
    // </div>

    <div style={styles.container} onClick={() => onOpen()}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
};

export default DrawerButton;
