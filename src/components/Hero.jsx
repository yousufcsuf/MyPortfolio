import React from "react";
import Typewriter from "typewriter-effect";
const resumeUrl = "/Yousuf Abdullah Borna,Resume.pdf";
export default function Hero() {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    console.log("working");
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Yousuf Borno
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Engineer",
                    "Salesforce Consultant",
                    "Devops Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              A highly skilled Salesforce Developer with over 2.5 years of
              experience creating customized Salesforce solutions using Apex,
              Lightning Web Components (LWC), and automation tools. Proficient
              in multiple programming languages and frameworks, including Java,
              JavaScript, and React, with hands-on expertise in cloud platforms
              like AWS and Salesforce. I am currently pursuing my Master’s in
              Computer Science at California State University, Fullerton, with a
              strong focus in the AI and Cloud domain.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* For future image, just keep some image */}
            <button
              color="blue"
              className="my-40 bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 z-50"
              onClick={() => {
                downloadFileAtUrl(resumeUrl);
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
