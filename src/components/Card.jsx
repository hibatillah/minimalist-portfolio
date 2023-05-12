import React from "react";
import Tag from "./Tag";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group/project">
      <img
        src={project.thumbnail} alt="project thumbnail"
        className="w-full aspect-video rounded object-cover"
      />
      <div className="flex items-baseline gap-3 mt-4">
        <h2 className="line-clamp-1 capitalize">{project.title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-4 h-4 stroke-[1.5] stroke-grey group-hover/project:stroke-2 group-hover/project:stroke-dark"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <ul className="tag-row mt-2">
        {project.tag.map((item, index) => (
          <Tag tag={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export const BookmarkCard = ({ bookmark }) => {
  return (
    <div className="bookmark-card group/bookmark">
      <img
        src={bookmark.icon} alt="bookmark icon"
        className="w-12 h-12 rounded-lg object-contain"
      />
      <div>
        <h2 className="line-clamp-1 capitalize">{bookmark.title}</h2>
        <p className="mt-1 text-sm line-clamp-2">{bookmark.desc}</p>
        <ul className="tag-row gap-x-1 mt-3">
          {bookmark.tag.map((item, index) =>
            <Tag tag={item} key={index} custom="scale-90" />
          )}
        </ul>
      </div>
    </div>
  );
};
