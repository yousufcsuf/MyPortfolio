import React from "react";

export default function Experience() {
  return (
    <>
      <div className="border-b  border-neutral-900 pb-4">
        <h1 className="mt-9 my-20 text-center text-4xl">
          Professional Experience
        </h1>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className=" -mt-12 flex justify-center items-center min-h-screen">
            {/* Centers the timeline vertically and horizontally */}
            <div className="relative border-l-4 border-black">
              {/* First Event */}
              <div className="mb-10 ml-6">
                <div className="absolute -ml-0.5 -mt-0.5 w-4 h-4 bg-black rounded-full -left-2"></div>
                <p className="bg-black text-white py-1 px-2 inline-block mb-2 text-sm">
                  January 2023 – June 2024
                </p>
                <h3 className="font-semibold text-xl">
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                    Salesforce Consultant/Developer
                  </span>
                </h3>
                <p className="text-gray-700">Eviden</p>
                <p className="text-gray-700">
                  I delivered comprehensive Salesforce solutions by integrating
                  frontend (LWC) and backend (Flow, Apex) capabilities, enabling
                  clients to streamline operations and enhance real-time
                  processing. Through automation workflows, performance
                  optimization, and external system integration, I provided
                  scalable, user-friendly interfaces that improved engagement
                  and efficiency. Collaborating with senior developers and CRM
                  Architects, I successfully delivered high-quality, innovative
                  solutions across 3+ projects, driving improved client outcomes
                  and operational efficiency.
                </p>
              </div>

              {/* Second Event */}
              <div className="mb-10 ml-6">
                <div className="absolute -ml-0.5 mt-1.5 w-4 h-4 bg-black rounded-full -left-2"></div>
                <p className="bg-black text-white py-1 px-2 inline-block mb-2 text-sm">
                  December 2021 – December 2022
                </p>
                <h3 className="font-semibold text-xl">
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                    Junior Developer
                  </span>
                </h3>
                <p className="text-gray-700">Eviden</p>
                <p className="text-gray-700">
                  Configured and maintained Salesforce Sales Cloud and Service
                  Cloud, enhancing client satisfaction and operational
                  efficiency. Automated processes reduced manual tasks, boosting
                  team productivity. Customized dashboards provided real-time
                  insights, enabling quicker decision-making. Collaborated
                  closely with stakeholders to implement tailored solutions,
                  significantly improving user experience and system performance
                  across multiple projects.
                </p>
              </div>

              {/* Add more events manually as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
