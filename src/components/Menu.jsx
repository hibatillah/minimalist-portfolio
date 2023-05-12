import React from 'react'
import darkMode from "../assets/light.svg";
import menuIcon from "../assets/menu.svg";

const Menu = ({ handle }) => {
  return (
    <>
      <div className="box-menu ml-auto">
        <img src={darkMode} alt="dark mode" className="pointer-events-none" />
      </div>
      <div className="box-menu" onClick={handle}>
        <img src={menuIcon} alt="menu" className="pointer-events-none" />
      </div>
    </>
  );
}

export default Menu