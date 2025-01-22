import React from "react";

const Timeline = () => {
  return (
    <>
      <div class="antialiased bg-orange-600 text-gray-800 m-4">
        <div class="relative container mx-auto px-6 flex flex-col space-y-8">
          <div class="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          <div class="relative z-10">
            <img
              src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
              alt=""
              class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div class="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                class="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-11 xs:left-26 md:left-14"
                aria-hidden="true"
              ></div>
              <div class="bg-white p-6 rounded-md shadow-md">
                <span class="font-bold text-indigo-600 text-sm tracking-wide">
                  Jan 2023– Jun 2024
                </span>
                <h1 class="text-2xl  pt-1"> Eviden</h1>
                <h1 class="text-2xl font-bold pt-1">
                  Salesforce Consultant/Developer
                </h1>
                <p class="pt-1">
                  Developed Salesforce automation solutions using Flow, Apex
                  Triggers, and Asynchronous Apex to streamline workflows and
                  enable real-time processing. Designed and implemented complex
                  Lightning Web Component (LWC) interfaces to ensure scalability
                  and user engagement. Engineered web services and integrated
                  data flows with external systems, collaborated with senior
                  developers to optimize tailored solutions, and improved system
                  performance through Apex code refactoring and query
                  optimization techniques.
                </p>
              </div>
            </div>
          </div>

          <div class="relative z-10">
            <img
              src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
              alt=""
              class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div class="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 md:ml-0 md:mr-auto md:pl-0 md:pr-16">
              <div
                class="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-11 xs:left-26 md:left-14 md:left-auto md:right-14"
                aria-hidden="true"
              ></div>
              <div class="bg-white p-6 rounded-md shadow-md">
                <span class="font-bold text-indigo-600 text-sm tracking-wide">
                  Dec 2021– Dec 2022
                </span>
                <h1 class="text-2xl  pt-1"> Eviden</h1>
                <h1 class="text-2xl font-bold pt-1">
                  Junior Salesforce Developer
                </h1>
                <p class="pt-1">
                  Configured and maintained Salesforce’s Sales Cloud and Service
                  Cloud to align with business goals and enhance operational
                  efficiency. Automated business processes by creating custom
                  workflows, approval processes, and process builders to
                  streamline daily operations. Customized dashboards and reports
                  to deliver real-time insights for sales and support teams.
                  Collaborated with business stakeholders to gather requirements
                  and implemented custom solutions using declarative tools to
                  meet user needs effectively.
                </p>
              </div>
            </div>
          </div>

          <div class="relative z-10">
            <img
              src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
              alt=""
              class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div class="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                class="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-11 xs:left-26 md:left-14"
                aria-hidden="true"
              ></div>
              <div class="bg-white p-6 rounded-md shadow-md">
                <span class="font-bold text-indigo-600 text-sm tracking-wide">
                  March 2020
                </span>
                <h1 class="text-2xl font-bold pt-1">Solo Trip</h1>
                <p class="pt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  iste suscipit reiciendis, perferendis vel consequuntur
                  cupiditate ad commodi provident, sapiente veniam sed autem,
                  perspiciatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
