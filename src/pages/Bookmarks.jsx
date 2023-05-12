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
    document.title = "hibatillah | bookmarks";
    console.log(bookmarks);
  }, []);

  return (
    <main className="container mt-14 mb-16 space-y-14">
      <div>
        <h1>Bookmarks</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
        <ul id="tags" className="w-full mt-6 flex flex-wrap gap-x-0.5 gap-y-2">
          {myTags.map((tag, index) => (
            <li key={index} className="cursor-pointer">
              <Tag
                tag={tag}
                handle={tagHandler}
                custom={`${
                  tag === activeTag
                    ? "bg-dark text-white shadow-xl"
                    : "bg-white text-dark shadow-none"
                } scale-90`}
              />
            </li>
          ))}
        </ul>
      </div>
      <ul id="bookmarks" className="grid grid-cols-1 gap-y-6">
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
