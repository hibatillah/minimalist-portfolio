import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tag } from "../components";
import { projects } from "../db";

const ProjectDetail = ({ data }) => {
  let location = useLocation();
  let path = location.pathname.split("/")[2];

  let project = projects.filter((item) => item.id === +path);
  const { id, title, desc, thumbnail, tag, demo, image, source } = project[0];

  useEffect(() => {
    console.log("🚀 ~ file: ProjectDetail.jsx:8 ~ ProjectDetail ~ path:", path);
    console.log(
      "🚀 ~ file: ProjectDetail.jsx:10 ~ ProjectDetail ~ project:",
      project
    );
  }, [path, project]);

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1">
        <div className="grid grid-cols-2 gap-5">
          <img
            src={`"${thumbnail}"`}
            alt="thumbnail"
            className="w-full col-span-2 border rounded-lg border-grey/50 aspect-video md:aspect-[2/1]"
          />
          {image.map((item) => (
            <img
              src={item}
              alt="projectImage"
              className="w-full col-span-1 border rounded-lg border-grey/50 aspect-video"
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:pl-10">
        <div className="mt-5">
          <h1>{title}</h1>
          <p className="md:mt-1">{desc}</p>
          <ul className="flex gap-1 mt-2">
            {tag.map((item, index) => (
              <li key={index}>
                <Tag tag={item} custom="scale-95" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-8 md:flex-row lg:mt-12">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none "
          >
            <div className="btn btn-primary">
              Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </a>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none "
          >
            <div className="btn btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-github w-5 h-5 fill-dark dark:fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Github
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
