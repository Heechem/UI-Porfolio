import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <AiOutlineMenu
        size={40}
        onClick={toggleNav}
        className="absolute top-4 right-4 z-[99] md:hidden "
        on
      />
      {nav ? (
        <div className="h-screen w-full bg-white/90 fixed flex flex-col justify-center items-center z-20 ">
          <a
            onClick={toggleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in-out duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>

          <a
            onClick={toggleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in-out duration-200 scroll-smooth"
          >
            <GrProjects size={20} />
            <span className="pl-4 ">work</span>
          </a>

          <a
            onClick={toggleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in-out duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4 ">Projects</span>
          </a>

          <a
            onClick={toggleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in-out duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4 ">Resume</span>
          </a>

          <a
            onClick={toggleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in-out duration-200"
          >
            <AiOutlineMail size={20} />

            <span className="pl-4 ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      {/* for large screens */}

      <div className="md:block hidden fixed top-[25%] z-10   ">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 "
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <AiOutlineHome size={20} />
          </a>
          <p
            className={`text-center transition duration-200 ease-in-out ${
              isShown ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Home
          </p>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <GrProjects size={20} />
          </a>
          <p
            className={`text-center transition duration-200 ease-in-out ${
              isShown ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            work
          </p>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <AiOutlineProject size={20} />
          </a>
          <p
            className={`text-center transition duration-200 ease-in-out ${
              isShown ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            projects
          </p>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <BsPerson size={20} />
          </a>
          <p
            className={`text-center transition duration-200 ease-in-out ${
              isShown ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Resume
          </p>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <AiOutlineMail size={20} />
          </a>
          <p
            className={`text-center transition duration-200 ease-in-out ${
              isShown ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Contact
          </p>
        </div>
      </div>
    </>
  );
};

export default SideNav;
