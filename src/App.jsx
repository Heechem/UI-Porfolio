import Contact from "./components/Contact";
import MainBg from "./components/MainBg";
import Project from "./components/Project";
import Resume from "./components/Resume";
import SideNav from "./components/SideNav";
import Work from "./components/Work";

function App() {
  return (
    <>
      <SideNav />
      <MainBg />
      <Work />
      <Project />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
