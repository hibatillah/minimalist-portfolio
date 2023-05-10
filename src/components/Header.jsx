import React from "react";
import profilePicture from "../assets/profile.svg";
import darkMode from "../assets/light.svg";
import menuIcon from "../assets/menu.svg";

const Header = () => {
  return (
    <>
      <a href="/">
        <img
          src={profilePicture}
          alt="profile"
          className="pointer-events-none select-none"
        />
      </a>
      <div className="w-10 h-8 ml-auto grid place-items-center rounded-md border border-dark cursor-pointer select-none press hover:bg-profile/30">
        <img src={darkMode} alt="dark mode" className="pointer-events-none" />
      </div>
      <div className="w-10 h-8 grid place-items-center rounded-md border border-dark cursor-pointer select-none press hover:bg-profile/30">
        <img src={menuIcon} alt="menu" className="pointer-events-none" />
      </div>
    </>
  );
};

export default Header;
