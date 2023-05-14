import React, { useEffect } from "react";

const Menu = ({ handle, theme }) => {
  const activeTheme = document.documentElement.getAttribute("class");
  useEffect(() => {
    console.log("🚀 ~ file: Menu.jsx:8 ~ Menu ~ activeTheme:", activeTheme);
  });

  return (
    <>
      <div className="ml-auto box-menu" onClick={theme}>
        <div className="w-4 h-4 px-0.5 py-[2px] rounded-full md:w-5 md:h-5 bg-dark dark:bg-white">
          <div className="w-1/2 h-full bg-white rounded-tl-full rounded-bl-full dark:bg-dark" />
        </div>
      </div>
      <div className="box-menu" onClick={handle}>
        <div className="flex flex-col h-full py-1 justify-evenly">
          <div className="w-6 h-[1.5px] bg-dark dark:bg-white" />
          <div className="w-6 h-[1.5px] bg-dark dark:bg-white" />
          <div className="w-6 h-[1.5px] bg-dark dark:bg-white" />
        </div>
      </div>
    </>
  );
};

export default Menu;
