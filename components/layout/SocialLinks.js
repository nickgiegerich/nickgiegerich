import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex pt-8">
      <a
        href="https://github.com/nickgiegerich"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-4xl mr-2 hover:text-lightGrayishCyan" />
      </a>
      <a
        href="https://www.linkedin.com/in/nick-giegerich-62b369168/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-4xl hover:text-lightGrayishCyan" />
      </a>
    </div>
  );
};
