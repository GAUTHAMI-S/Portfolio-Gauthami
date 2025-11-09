import React from "react";
import { FaDocker, FaGithub, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiFlask, SiNextdotjs, SiPython } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const icons = [
  <FaHtml5 className="w-20 h-20 " />,
  <IoLogoCss3 className="w-20 h-20 " />,
  <IoLogoJavascript className="w-20 h-20" />,
  <FaReact className="w-20 h-20 " />,
  <SiNextdotjs className="w-20 h-20" />,
  <SiPython className="w-20 h-20" />,
  <BiLogoPostgresql className="w-20 h-20" />,
  <FiFramer className="w-20 h-20" />,
  <FaDocker className="w-20 h-20" />,
  <SiFlask className="w-20 h-20" />,
  <FaGithub className="w-20 h-20" />,
  <RiTailwindCssFill className="w-20 h-20" />,
  <FaSass className="w-20 h-20" />,
];
const Skills = () => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      viewport={{ once: true }}
      className="relative min-h-[80%] w-full px-[15%] py-64 scroll-mt-20 mx-auto flex flex-col items-center justify-item gap-6 overflow-hidden"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Skill Set
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Tech Stack
      </motion.h2>

      {/* Moving icons row */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative w-full overflow-hidden">
        {/* Fog gradient edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 dark:from-black dark:to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 dark:from-black dark:to-transparent z-10" />

        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.5 }}
              className="text-5xl cursor-pointer"
            >
              {icon}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
