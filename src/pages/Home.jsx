import React, { useEffect } from "react";
import { Tag } from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Hibatillah";
  })
  
  const myTag = [
    "UI/UX",
    "Frontend",
    "Coding",
    "Design",
    "Web",
    "Mobile",
    "Javascript",
    "Tailwindcss",
  ];

  return (
    <main className="container mt-20 mb-12 space-y-20">
      <div className="lg:flex lg:items-end">
        <div>
          <h1>M. Hibatillah Hasanin</h1>
          <p className="mt-3 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            repellendus provident dignissimos doloribus nostrum, magni odio
            ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti, optio?
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
            src="https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="welcome pict"
            className="object-cover w-full pointer-events-none aspect-video md:w-1/3"
          />
          <img
            src="https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="welcome pict"
            className="hidden object-cover pointer-events-none aspect-video md:block md:w-2/3"
          />
        </div>
        <h1 className="mt-5 leading-tight">
          <span className="text-grey">Majoring</span> information systems <br />
          <span className="text-grey">passionate on</span> frontend
          <span className="text-grey">
            {" "}
            development <br /> and love to{" "}
          </span>{" "}
          design.
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
