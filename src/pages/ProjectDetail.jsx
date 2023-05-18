import React, { useEffect } from "react";

const ProjectDetail = ({ project }) => {
  const projectImages = project.image;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arrImages = [];
  projectImages.map((item) => arrImages.push(item));
  
  useEffect(() => {
    console.log(project);
    console.log(arrImages);
  }, [arrImages, project]);

  return (
    <main className="container grid grid-cols-1">
      <div className="col-span-1">
        <img
          src={project.thumbnail}
          alt="thumbnail"
          className="w-full border rounded-lg border-grey aspect-video"
        />
        <div className="flex gap-5 mt-5">
          {arrImages.map((item) => (
            <img
              src={item}
              alt="projectImage"
              className="w-full border rounded-lg border-grey aspect-video"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
