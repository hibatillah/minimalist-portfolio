import React, { useEffect } from "react";
import darkMode from "../assets/light.svg";
import lightMode from "../assets/light.svg";
import menuIcon from "../assets/menu.svg";

const Menu = ({ handle, theme }) => {
  const activeTheme = document.documentElement.getAttribute("class");
  useEffect(() => {
    console.log("🚀 ~ file: Menu.jsx:8 ~ Menu ~ activeTheme:", activeTheme);
  });

  return (
    <>
      <div className="ml-auto box-menu" onClick={theme}>
        <img
          src={activeTheme === "dark" ? darkMode : lightMode}
          alt="theme toggle"
          className="pointer-events-none"
        />
      </div>
      <div className="box-menu" onClick={handle}>
        <img src={menuIcon} alt="menu" className="pointer-events-none" />
      </div>
    </>
  );
};

export default Menu;
