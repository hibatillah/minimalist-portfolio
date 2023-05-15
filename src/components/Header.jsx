import React from "react";
import { Menu } from "./";
import profilePicture from "../assets/profile.svg";

const Header = ({ handle }) => {
  return (
    <>
      <a href="/">
        <img
          src={profilePicture}
          alt="profile"
          className="pointer-events-none select-none"
        />
      </a>
      <Menu handle={handle} />
    </>
  );
};

export default Header;
