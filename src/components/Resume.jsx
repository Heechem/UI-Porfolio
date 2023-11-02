import { HiOutlineDocumentDownload } from "react-icons/hi";
import ResumeDoc from "../assets/ResumeHeechem.pdf";

const Resume = () => {
  return (
    <div id="resume" className="max-[1040px] py-16 p-4 m-auto md:pl-20">
      <h1 className="text-center text-4xl font-bold py-2 text-blue-800">
        Resume
      </h1>
      <p className="text-center">
        Click on the Icon to download my full detailed resume
      </p>
      <div className="flex justify-center items-center py-4 hover:cursor-pointer">
        <a href={ResumeDoc} className="" target="_blank" rel="noreferrer">
          <HiOutlineDocumentDownload size={50} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Resume;
