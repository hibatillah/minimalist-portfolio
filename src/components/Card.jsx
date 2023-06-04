import React from "react";
import Tag from "./Tag";
import { codeIcon } from "../assets";

export const ProjectCard = ({ project }) => {
  const { thumbnail, title, tag, source } = project;
  
  return (
    <div className="project-card group/project">
      <img
        src={thumbnail}
        alt="project thumbnail"
        className="object-cover w-full rounded aspect-video"
      />
      <div className="flex items-baseline gap-3 mt-4">
        <h2 className="capitalize line-clamp-1">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-4 h-4 stroke-[1.5] stroke-grey group-hover/project:stroke-2 group-hover/project:stroke-dark dark:group-hover/project:stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <div className="flex items-end mt-3">
        <ul className="flex-auto tag-row">
          {tag.map((item, index) => (
            <Tag tag={item} key={index} />
          ))}
        </ul>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none"
        >
          <div className="px-2 py-1.5 border border-grey hover:bg-profile/50 rounded-md">
            <img src={codeIcon} alt="source" className="w-5 h-5 text-dark" />
          </div>
        </a>
      </div>
    </div>
  );
};

export const BookmarkCard = ({ bookmark }) => {
  return (
    <div className="bookmark-card group/bookmark">
      <img
        src={bookmark.icon}
        alt="bookmark icon"
        className="object-contain w-12 h-12 rounded-lg"
      />
      <div>
        <h2 className="line-clamp-1 first-letter:uppercase">
          {bookmark.title}
        </h2>
        <p className="mt-1 text-sm line-clamp-2">{bookmark.desc}</p>
        <ul className="mt-3 tag-row gap-x-1">
          {bookmark.label.map((item, index) => (
            <Tag tag={item} key={index} custom="scale-90" />
          ))}
        </ul>
      </div>
    </div>
  );
};
