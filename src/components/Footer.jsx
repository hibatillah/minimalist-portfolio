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
      name: "Linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/in/m-hibatillah-hasanin-8562a2268",
    },
  ];
  const year = new Date().getFullYear();

  return (
    <>
      <ul className="mx-auto flex gap-4">
        {socmed.map((item,  index) =>
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 grid place-items-center border border-profile rounded-full select-none press hover:bg-profile/30">
                <img src={item.img} alt="socmed icon" className={`${item.name === 'Github' ? 'w-6' : 'w-5'} aspect-auto pointer-events-none`} />
              </div>
            </a>
          </li>
        )}
      </ul>
      <div className="mx-auto text-grey select-none">{year} &copy; hibatillah</div>
    </>
  );
};

export default Footer;
