import React from "react";

const WorkItem = ({ year, details, duration, title }) => {
  return (
    <ul className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="w-3 h-3 bg-stone-200 rounded-full absolute mt-1.5 border-white -left-1.5" />
        <p className="flex flex-wrap gap-4 items-center justify-start text-xs md:tex-sm">
          <span className="'inline-block px-2 py-1 font-semibold text-white bg-[#001be5] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001be5]">{title}</span>
          <span className="text-sm my-1 font-normal text-stone-600 leading-none">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-600">{details}</p>
      </li>
    </ul>
  );
};

export default WorkItem;
