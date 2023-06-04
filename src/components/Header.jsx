import React from "react";
import { Menu } from "./";
import { profile } from "../assets";

const Header = ({ handle }) => {
  return (
    <>
      <a href="/">
        <img
          src={profile}
          alt="profile"
          className="pointer-events-none select-none"
        />
      </a>
      <Menu handle={handle} />
    </>
  );
};

export default Header;
