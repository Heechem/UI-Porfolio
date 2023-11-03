import evogym from "../assets/Evogym.png";
import weatherAppImg from "../assets/weatherapp.png";
// import wildOasisImg from "../assets/wildoasis.png";
import milkeewayImg from "../assets/milkeeway.png";
import UiDashboard from "../assets/UiDash.png";
import Tesla from "../assets/Tesla.png";
import ResponsiveUi from "../assets/ResponsiveDashboard.png";
import ProjectItem from "./ProjectItem";
import Youtube from "../assets/youtubeClone.png";
import DND from "../assets/DND.png";
import Uber from "../assets/UberClone.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-[#001b5e] text-center">
        Projects
      </h1>
      <p className=" text-center py-8 text-xl">
        Explore my self-taught year of my React journey in these interactive web
        projects!
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={Uber}
          title="Uber Clone"
          link={"https://uber-clone-rxnt-al460u03c-heechem.vercel.app/"}
          repos={"https://github.com/Heechem/uber-clone"}
          description={"test@testmail.com / password:123456"}
        />

        <ProjectItem
          img={DND}
          title="Drag & Drop Todo app"
          link={"https://drag-todo.netlify.app/"}
          repos={"https://github.com/Heechem/Drag-N-Drop"}
        />

        <ProjectItem
          img={ResponsiveUi}
          title="Responsive Dashboard"
          link={"https://responsive-ui-dashboard.netlify.app/"}
          repos={"https://github.com/Heechem/Responsive-Admin-UI"}
        />

        <ProjectItem
          img={evogym}
          title="Evogym"
          link={"https://evogym-clone.netlify.app/"}
          repos={"https://github.com/Heechem/Evogymsite/tree/main"}
        />
        <ProjectItem
          img={Tesla}
          title="Tesla Clone"
          link={"https://clone-tesla-v1.netlify.app/"}
          repos={"https://github.com/Heechem/Tesla-Clone"}
          description={"Load of the home page is slow"}
        />

        {/* <ProjectItem
          img={Youtube}
          title="Youtube home page Clone"
          link={"https://lading-youtube-clone.netlify.app/"}
          repos={"https://github.com/Heechem/Langing-youtube-page/tree/main"}
        /> */}

        {/* <ProjectItem
          img={UiDashboard}
          title="Ui Dashboard"
          link={"https://admirable-dashboard.netlify.app/"}
          repos={"https://github.com/Heechem/UI-Dashboard/tree/main"}
        /> */}

        {/* <ProjectItem
          img={weatherAppImg}
          title="Weather App"
          link={"https://weather-heech.netlify.app/"}
          repos={"https://github.com/Heechem/weather-app"}
        /> */}

        {/* <ProjectItem
          img={wildOasisImg}
          title="Wild Oasis"
          link={"https://wildeoasis.netlify.app"}
          repos={"https://github.com/Heechem/the-wild-oasis"}
        /> */}
        {/* <ProjectItem
          img={milkeewayImg}
          title="Milkeeway page"
          link={"https://melkeeway.netlify.app/"}
          repos={"https://github.com/Heechem/MilkeeWay"}
        /> */}
      </div>
    </div>
  );
};

export default Project;
