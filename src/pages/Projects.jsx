import React, { useEffect } from "react";
import { ProjectCard } from "../components";
import { projects } from "../db";

const Projects = () => {
  useEffect(() => {
    console.log(projects);
  }, []);

  return (
    <main className="container mt-14 mb-16 space-y-14">
      <div>
        <h1>Projects</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
      </div>
      <ul id="projects" className="grid grid-cols-1 gap-y-8">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
