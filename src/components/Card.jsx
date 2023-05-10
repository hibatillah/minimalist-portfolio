import React from "react";
import Tag from "./Tag";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group/project">
      <img
        src={project.thumbnail}
        className="w-full aspect-video rounded object-cover"
      />
      <div className="flex items-baseline gap-3 mt-3">
        <h2 className="line-clamp-1">{project.title}</h2>
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

export const BookmarkCard = () => {
  return (
    <div className="bookmark-card group/bookmark">
      <img
        src="https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="bookmark icon"
        className="w-14 h-14 rounded object-cover"
      />
      <div>
        <h2 className="line-clamp-1">dribbble.com</h2>
        <p className="mt-1 text-sm line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          maxime dicta ipsum consectetur, quod atque!
        </p>
        <ul className="tag-row gap-x-1 mt-3">
          <Tag tag="UI/UX" custom='scale-90' />
          <Tag tag="UI/UX" custom='scale-90' />
        </ul>
      </div>
    </div>
  );
};
