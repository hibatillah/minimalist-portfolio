import React from "react";
import { Menu } from "./";
import profilePicture from "../assets/profile.svg";

const Header = ({ handle, theme }) => {
  return (
    <>
      <a href="/">
        <img
          src={profilePicture}
          alt="profile"
          className="pointer-events-none select-none"
        />
      </a>
      <Menu handle={handle} theme={theme} />
    </>
  );
};

export default Header;
