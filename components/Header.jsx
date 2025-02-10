import React from "react";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4
     "
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          delay: 0.1,
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pic"
          className="rounded-full w-32 "
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Gauthami Sankaramangalam
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-6.5xl font-Ovo"
      >
        Frontend web developer from India
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        nam est itaque recusandae voluptatem consequuntur dolor mollitia ducimus
        quos molestiae porro quis reiciendis, assumenda aperiam iusto vel saepe
        ab quae!
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white flex items-center text-white bg-black gap-2 "
        >
          contact me <FaLocationArrow className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <FaDownload className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
