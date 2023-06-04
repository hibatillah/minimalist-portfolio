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
    "photos",
    "blogs",
    "tools",
    "plugins",
    "quotes",
  ];

  const [activeTag, setActiveTag] = useState("inspirations");
  const tagHandle = (e) => {
    setActiveTag(e.target.innerText.toLowerCase());
  };

  const filteredBookmarks = bookmarks.filter((bookmark) => bookmark.label.find((el) => el === activeTag))
  
  useEffect(() => {
    document.title = "Hibatillah's Bookmarks";
  },[]);
  
  useEffect(() => {
    console.log("🚀 ~ file: Bookmarks.jsx:26 ~ Bookmarks ~ filteredBookmarks:", filteredBookmarks)
  },[filteredBookmarks]);

  return (
    <main className="container space-y-14">
      <div>
        <h1>Bookmarks</h1>
        <p className="mt-3 lg:w-3/5">
          I like to keep a list of interesting and useful resources which can
          then help me in completing various tasks. Here are some collections of
          bookmarks that I have saved
        </p>
        <ul
          id="tags"
          className="w-full mt-6 flex flex-wrap gap-x-0.5 gap-y-2 lg:w-2/3 xl:w-1/2"
        >
          {myTags.map((tag, index) => (
            <li key={index} className="cursor-pointer">
              <Tag
                tag={tag}
                handle={tagHandle}
                custom={`${
                  tag === activeTag
                    ? "text-white bg-dark dark:text-dark dark:bg-white shadow-xl dark:shadow-grey/10"
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
        {filteredBookmarks.map((bookmark, index) => (
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
