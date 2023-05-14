import React, { useState, useEffect } from "react";
import { BookmarkCard, Tag } from "../components";
import { bookmarks } from "../db";

const Bookmarks = () => {
  const myTags = [
    "inspirations",
    "icons",
    "illustrations",
    "patterns",
    "fonts",
    "colors",
    "images",
    "blogs",
    "tools",
    "plugins",
    "quotes",
  ];

  const [activeTag, setActiveTag] = useState("inspirations");
  const tagHandler = (e) => {
    setActiveTag(e.target.innerText.toLowerCase());
  };

  useEffect(() => {
    document.title = "Hibatillah's Bookmarks";
    console.log(bookmarks);
  }, []);

  return (
    <main className="container space-y-14">
      <div>
        <h1>Bookmarks</h1>
        <p className="mt-3 lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
        <ul
          id="tags"
          className="w-full mt-6 flex flex-wrap gap-x-0.5 gap-y-2 lg:w-2/3 xl:w-1/2"
        >
          {myTags.map((tag, index) => (
            <li key={index} className="cursor-pointer">
              <Tag
                tag={tag}
                handle={tagHandler}
                custom={`${
                  tag === activeTag
                    ? "shadow-xl text-white bg-dark dark:bg-white dark:text-dark dark:shadow-grey/10"
                    : "text-dark bg-white dark:bg-dark dark:text-white"
                } scale-90`}
              />
            </li>
          ))}
        </ul>
      </div>
      <ul
        id="bookmarks"
        className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 lg:gap-x-4"
      >
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
              <BookmarkCard bookmark={bookmark} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Bookmarks;
