import React from "react";
import email from "../assets/icons/mail.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  const socmed = [
    {
      name: "Email",
      img: email,
      link: "mailto:hibatillah21si@mahasiswa.pcr.ac.id",
    },
    {
      name: "Instagram",
      img: instagram,
      link: "https://instagram.com/hibat.illah",
    },
    {
      name: "Github",
      img: github,
      link: "https://github.com/hibatillah",
    },
    {
      name: "LinkedIn",
      img: linkedin,
      link: "https://www.linkedin.com/in/m-hibatillah-hasanin-8562a2268",
    },
  ];
  const year = new Date().getFullYear();

  return (
    <>
      <ul className="flex gap-4 mx-auto lg:order-2 lg:mx-0 lg:gap-3">
        {socmed.map((item, index) => (
          <li key={index} className="group/socmed">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="w-[50px] h-[50px] grid place-items-center border border-profile rounded-full select-none press active:bg-profile/50 group-hover/socmed:-translate-y-1 lg:w-12 lg:h-12 dark:border-grey dark:active:bg-grey/50">
                <img
                  src={item.img}
                  alt="socmed icon"
                  className={`${
                    item.name === "Github"
                      ? "w-8 lg:w-7"
                      : "w-6 lg:w-5"
                  } aspect-auto pointer-events-none dark:fill-white`}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        <div className="mx-auto select-none text-grey lg:order-1 lg:mx-0">
          {year} &copy; hibatillah
        </div>
        <div className="hidden select-none text-grey hover:text-dark lg:block lg:order-1 dark:hover:text-white">
          <a href="http://github.com/sponsors/hibatillah" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
