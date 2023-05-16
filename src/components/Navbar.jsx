import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./";

const Navbar = ({ handle }) => {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Bookmarks", link: "/bookmarks" },
  ];

  return (
    <>
      <div className="flex gap-3 md:hidden">
        <Menu handle={handle} />
      </div>
      <ul className="pl-4 pr-6 mt-24 space-y-3 md:mt-0">
        {menu.map((item, index) => (
          <li key={index} className="group/menu">
            <NavLink 
              to={item.link}
              className={({ isActive }) => isActive ? "text-dark dark:text-white" : "text-grey/70 hover:text-grey dark:hover:text-profile/70"}
              onClick={handle}
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-5 h-5 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                <span className="text-xl">{item.name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
