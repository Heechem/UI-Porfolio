import React from "react";

const ProjectItem = ({ img, title, link, repos }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img
        src={img}
        alt="Porjects"
        className="rounded-xl group-hover:opacity-10 object-cover transition duration-300 ease-in"
      />
      <div className="hidden group-hover:block absolute top-[50%] lef-[50%] translate-y-[-50%] ">
        <h3 className="text-white font-bold tracking-wider text-center">
          {title}
        </h3>
        <a href={repos} target="_blank" rel="noreferrer">
          <p className="pb-4 pt-2 text-white text-center hover:underline hover:underline-offset-2 hover:cursor-pointer   ">
            Repos
          </p>
        </a>

        <a href={link} target="_blank" rel="noreferrer">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg hover:scale-105">
            Live Demo
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
