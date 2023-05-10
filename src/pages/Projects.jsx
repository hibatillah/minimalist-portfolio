import React from 'react'
import { ProjectCard, BookmarkCard } from '../components'

const Projects = () => {
  return (
    <main className="container mt-14 mb-12 space-y-14">
      <div>
        <h1>Projects</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          repellendus provident dignissimos doloribus nostrum, magni odio
          ratione voluptas et reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti, optio?
        </p>
      </div>
      <ul id='projects' className="grid grid-cols-1">
        <li>
          {/* <ProjectCard /> */}
        </li>
        <li>
          <BookmarkCard />
        </li>
      </ul>
    </main>
  );
}

export default Projects