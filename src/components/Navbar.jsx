import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="text-4xl  w-30"></h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/yousuf-abdullah-borna-909435301/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/yousufcsuf" target="_blank">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Yousuf_26/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
}
