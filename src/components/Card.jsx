import React from "react";
import Tag from "./Tag";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
              className="w-5 h-5 fill-dark dark:fill-white"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
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
