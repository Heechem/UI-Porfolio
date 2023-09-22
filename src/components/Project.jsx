import dashBoardImg from "../assets/DashBoard.png";
import weatherAppImg from "../assets/weatherapp.png";
import wildOasisImg from "../assets/wildoasis.png";
import milkeewayImg from "../assets/milkeeway.png";

import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-[#001b5e] text-center">
        Projects
      </h1>
      <p className=" text-center py-8">
        Welcome to my projects section! I&apos;m a self-taught React developer,
        and here, you&apos;ll discover a selection of my work, highlighting my
        created interactive web applications. Dive in and explore my React
        journey through these projects.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={weatherAppImg}
          title="Weather App"
          link={"https://weather-heech.netlify.app/"}
        />
        <ProjectItem
          img={dashBoardImg}
          title="DashBoard"
          link={"https://dashboard-clone-mockdata.netlify.app/"}
          repos={"https://github.com/Heechem/react-admin"}
        />
        <ProjectItem img={wildOasisImg} title="Wild Oasis" />
        <ProjectItem
          img={milkeewayImg}
          title="Milkeeway page"
          link={"https://melkeeway.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Project;
