import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components";
import { projects } from "../db";

const Projects = () => {
  useEffect(() => {
    document.title = "Hibatillah's Projects";
    console.log(projects);
  }, []);

  return (
    <main className="container space-y-14">
      <div className="lg:w-2/3">
        <h1>Projects</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
      </div>
      <ul
        id="projects"
        className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 md:gap-x-6 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={`${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
