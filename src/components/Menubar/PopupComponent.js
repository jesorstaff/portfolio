import React from 'react';
import Popup from "reactjs-popup";

import BurgerIcon from '../Menubar/BurgerIcon';
import Menu from '../Menubar/Menu';
import '../Menubar/menubar.css';

const contentStyle = {
  background: "rgba(51,51,51,1)",
  width: "100%",
  height: "100%",
  border: "none"
};

const overlayStyle = {
  background: "rgba(255,255,255,0.98)",
};

const PopupComponent = () => {
  return (
    <Popup
      modal
      overlayStyle={overlayStyle}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  )
};

export default PopupComponent;
