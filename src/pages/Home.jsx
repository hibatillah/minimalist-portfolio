import React, { useEffect } from "react";
import { Tag } from "../components";
import { gedung, art } from "../assets";

const Home = () => {
  useEffect(() => {
    document.title = "Hibatillah";
  });

  const myTag = [
    "UI/UX",
    "Frontend",
    "Coding",
    "Design",
    "Web",
    "CSS",
    "Javascript",
    "Tailwindcss",
  ];

  return (
    <main className="container space-y-20">
      <div className="lg:flex lg:items-end">
        <div className="lg:flex-auto">
          <h1>M. Hibatillah Hasanin</h1>
          <p className="mt-3 lg:w-2/3">
            Hi i'm a student majoring Information System in Politeknik Caltex
            Riau, Pekanbaru, Indonesia. I'm passionate on frontend development
            and love to design.
          </p>
        </div>
        <div className="mt-6 lg:flex-none lg:text-right">
          <h6>UI Designer | Frontend Dev</h6>
          <h6>Indonesia</h6>
        </div>
      </div>
      <div>
        <div className="flex gap-5 lg:h-[500px]">
          <img
            src={art}
            alt="welcome pict"
            className="object-cover w-full pointer-events-none aspect-video md:w-1/3"
          />
          <img
            src={gedung}
            alt="welcome pict"
            className="hidden object-cover pointer-events-none aspect-video md:block md:w-2/3"
          />
        </div>
        <h1 className="mt-5 leading-tight">
          <span className="text-grey">Majoring</span> information systems <br />
          <span className="text-grey">passionate on</span> frontend
          <span className="text-grey"> development and love to </span> design.
        </h1>
      </div>
      <ul className="justify-center tag-row lg:justify-end">
        {myTag.map((item, index) => (
          <Tag key={index} tag={item} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
