import React from "react";
import { Tag } from "../components";

const Home = () => {
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
      <div>
        <h1>M. Hibatillah Hasanin</h1>
        <p className="mt-3 lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
        <div className="mt-6">
          <h6>UI Designer | Frontend Dev</h6>
          <h6>Indonesia</h6>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex gap-5">
          <img
            src="https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="welcome pict"
            className="w-full aspect-video object-cover pointer-events-none md:w-1/3 lg:w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="welcome pict"
            className="hidden aspect-video object-cover pointer-events-none md:block md:w-2/3 lg:hidden"
          />
        </div>
        <h1 className="mt-5">
          <span className="text-grey">Majoring</span> information systems <br />
          <span className="text-grey">passionate on</span> frontend
          <span className="text-grey"> development <br /> and love to </span> design.
        </h1>
      </div>
      <ul className="tag-row justify-center">
        {myTag.map((item, index) => (
          <Tag key={index} tag={item} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
