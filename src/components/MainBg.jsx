import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useRef } from "react";

const skills = [
  {
    name: "HTML",
    icon: (
      <SiHtml5
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#E34F26]"
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <SiCss3
        size={"3em"}
        className="origin-bottom  transition duration-300 group-hover:text-[#1572B6]"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <SiJavascript
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#F7DF1E]"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#61DAFB]"
      />
    ),
  },

  {
    name: "Tailwind",
    icon: (
      <SiTailwindcss
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#06B6D4]"
      />
    ),
  },

  {
    name: "Git",
    icon: (
      <SiGit
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#F05032]"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#3178C6]"
      />
    ),
  },
];

const MainBg = () => {
  const elementRef = useRef();
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        // src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        // src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
        alt="web picture"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div className="max-w-[600px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I am Heechem
          </h1>
          <h2 className="flex flex-wrap justify-center  items-center sm:text-3xl text-2xl pt-4 text-gray-800">
            I&#39; m
            <TypeAnimation
              className=" text-center"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                2000,
                "A Self taught Developer",
                2000,
                "Driven by the wish to have an  Added Value ",

                2000,
                "Actually learning Next.js to start Full-Stack Dev",
                2000,
              ]}
              wrapper="span"
              speed={50}
              // deletionSpeed={40}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex  w-full max-w-[300px] justify-between pt-5 mt-10">
            <a
              href="https://www.linkedin.com/in/ichallamene-hichem/"
              target="_blank"
              rel="noreferrer"
              className="hover: shadow-sm border-0  hover:shadow-gray-500 transition duration-200 ease-in-out hover:scale-110 hover:border-none"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/Heechem"
              target="_blank"
              rel="noreferrer"
              className="hover: shadow-sm  border-0  hover:shadow-gray-500 transition duration-200 ease-in-out hover:scale-110 hover:border-none"
            >
              <FaGithub size={30} className="cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/hich.icha.92"
              target="_blank"
              rel="noreferrer"
              className="hover: shadow-sm border-0  hover:shadow-gray-500 transition duration-200 ease-in-out hover:scale-110"
            >
              <FaFacebook size={30} className="cursor-pointer" />
            </a>
          </div>

          <p className="mt-16 text-center text-2xl font-bold  ">My stack</p>

          <div
            className="grid grid-cols-3 gap-4 w-full justify-items-center overflow-x-auto  px-16 mt-24 scrollbar-hide 
            "
            ref={elementRef}
          >
            {skills.map((item, index) => (
              <div
                key={index}
                className="group flex w-1/3  flex-col items-center  sm:justify-center gap-2  "
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBg;
