import React from "react";

export default function Skill() {
  return (
    <>
      <div className="border-b  border-neutral-900 pb-4">
        <h1 className="my-20 mt-10  text-center text-4xl">
          Technical Skills & Certification{" "}
        </h1>
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center"></h2>
          <table className="table-auto w-auto">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  Programming Language
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Java
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      JavaScript
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Python
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      HTML5
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      CSS3
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  Database
                </td>
                <td className="px-4 py-2 text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      PostreSQL
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      MySQL
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  Frameworks & Libraries
                </td>
                <td className="px-4 py-2 text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Node.js
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Express.js
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      React.js
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      tailwind.css
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Passport.js
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  AI Framework
                </td>
                <td className="px-4 py-2 text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      OPEN AI
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  Cloud & DevOps tool
                </td>
                <td className="px-4 py-2 text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Amazon Web Services
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Salesforce
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Google Cloud Platform
                    </span>

                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Docker
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Kubernetes
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      GitHub
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      CI/CD
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      REST API
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Terraform
                    </span>
                    <span className="inline-block bg-black text-white text-sm font-semibold px-2.5 py-1 rounded">
                      Observability
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
