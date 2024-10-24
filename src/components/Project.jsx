import React from "react";

export default function Project() {
  return (
    <>
      <div className="border-b  border-neutral-900 pb-4">
        <h1 className="my-20 mt-10 text-center text-4xl">Projects </h1>
        {/* First Project*/}
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              {/* For later part we would want to include images of the project */}
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                Smart Task System Management |
                <span className="px-1 py-1 text-teal-400 underline">
                  <a
                    href="https://github.com/yousufcsuf/Smart-Task-Management-System"
                    target="_blank"
                  >
                    Link
                  </a>
                </span>
              </h6>

              <p className="mb-4">
                <span className="px-1 py-1">Coursework</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Backend Engineering
                </span>
              </p>
              <p className="mb-4">
                Timeline: September 2024 - December 2024 (Ongoing)
              </p>
              <p className="mb-4">
                As part of my CPSC-449 coursework, I’m engineering an AI-powered
                To-Do List web app, integrating OpenAI's GenAI for dynamic task
                decomposition and real-time prioritization. Leveraging a
                React.js frontend, Node.js backend, and PostgreSQL, it's
                deployed via GCP with Docker/Kubernetes, featuring drag-and-drop
                reordering, OAuth authentication, and optimized API performance.
                It’s designed to enhance productivity, enabling users to focus
                on high-priority tasks and manage their time more effectively
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  OPEN AI
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Node.js
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Express.js
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  PostreSQL
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Google Cloud Platform
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML5
                </span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS3
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End of first experience*/}
      </div>
    </>
  );
}
