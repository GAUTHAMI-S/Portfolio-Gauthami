import Image from "next/image";
import React from "react";
import { FaDownload, FaLocationArrow } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4
     "
    >
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pic"
          className="rounded-full w-32 "
        />
      </div>
      <h3 className="flex items-end text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Gauthami Sankaramangalam
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-6.5xl font-Ovo">
        Frontend web developer from India
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        nam est itaque recusandae voluptatem consequuntur dolor mollitia ducimus
        quos molestiae porro quis reiciendis, assumenda aperiam iusto vel saepe
        ab quae!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white flex items-center text-white bg-black gap-2"
        >
          contact me <FaLocationArrow className="w-6 h-6" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <FaDownload className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;
