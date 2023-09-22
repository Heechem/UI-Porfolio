import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Customer Care representative",
    duration: "today",
    details: `Provided exceptional customer service by assisting customers with product selection, addressing inquiries, and ensuring a positive shopping experience.
    
    ● Utilized effective communication skills to build rapport with customers, leading to increased customer loyalty and repeat business.
    ● Contributed to the development of user-focused documentation, including FAQs and troubleshooting guides, improving support efficiency and user satisfaction.
    Collaborated with senior support team members to escalate and resolve complex user-reported issues in a timely manner.`,
  },

  {
    year: 2020,
    title: "Trainer / Technical Back-liner ",
    duration: "2,5 years",
    details: `● having the best satisfaction results
    ● handling training , handling technical and logistical escalations without mistakes and on time
    ● Increase the slef confidence of the agents by training and knowledge update.`,
  },
  {
    year: 2019,
    title: "Customer advisor",
    duration: "6 Months",
    details: `● Increasing the sales on the shop
    ● handling and resolving all complaints in a timely manner and Nespresso guidlines`,
  },
  {
    year: 2018,
    title: "Customer Service Agent",
    duration: "1.5 Year",
    details: `● Bringing back customer trust
    ● Handling all the shipping, customs and inland issues, on time to avoid Detention and Demurrage.
    ● Releasing over 200 imports per days , and 20 export per week`,
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      <p className="text-center text-xl py-2 text-[#001b5e] underline underline-offset-4">
        short experience
      </p>
      <p className="text-center py-2 text-sm">(Detailed on my resume)</p>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
