import React from "react";

export default function Contact() {
  return (
    <>
      <h1 className=" mt-10 text-center text-4xl">Contact </h1>
      <div class=" flex justify-center">
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
          <table className="mt-8 min-w-full table-auto">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Email</td>
                <td className="px-4 py-2 text-gray-600">
                  yousuf.grad.26@gmail.com
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Phone</td>
                <td className="px-4 py-2 text-gray-600">605-653-9229</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">
                  Address
                </td>
                <td className="px-4 py-2 text-gray-600">
                  2644 Associated Rd, Fullerton,CA
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
