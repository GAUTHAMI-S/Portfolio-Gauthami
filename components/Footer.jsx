import React from "react";
import {
  FaEarlybirds,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <div className="text-center flex flex-col gap-2 justify-center items-center">
        <FaEarlybirds className="w-8 h-8 " />
        <div className="w-max flex items-center gap-2 max-auto">
          <MdEmail className="w-8 h-8 " /> gauthamisankaramangalam@gmail.com
        </div>{" "}
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Gauthami Sankaramangalam. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="">
              <FaInstagram className="w-10 h-10 " />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className="w-10 h-10 " />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn className="w-10 h-10 " />
            </a>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Footer;
