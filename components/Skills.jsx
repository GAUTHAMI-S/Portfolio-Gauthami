import React from "react";
import { FaDocker, FaGithub, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiFlask, SiNextdotjs, SiPython } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const icons = [
  <FaHtml5 className="w-10 h-10 " />,
  <IoLogoCss3 className="w-10 h-10 " />,
  <IoLogoJavascript className="w-10 h-10" />,
  <FaReact className="w-10 h-10 " />,
  <SiNextdotjs className="w-10 h-10" />,
  <SiPython className="w-10 h-10" />,
  <BiLogoPostgresql className="w-11 h-11" />,
  <FiFramer className="w-10 h-10" />,
  <FaDocker className="w-10 h-10" />,
  <SiFlask className="w-10 h-10" />,
  <FaGithub className="w-10 h-10" />,
  <RiTailwindCssFill className="w-10 h-10" />,
  <FaSass className="w-10 h-10" />,
];
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      viewport={{ once: true }}
      className="min-h-screen w-full px-[12%] py-16 scroll-mt-20 mx-auto flex gap-5  flex-col items-center justify-center"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
        viewport={{ once: true }}
      >
        My Skill Set
      </motion.h4>
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Tech Stack
      </motion.h2>
      <p className="text-center max-x-2xl mx-auto. mb-12 font-Ovo">
        The skills, tools and technologies i use:
      </p>
      <motion.div
        viewport={{ once: true }}
        className="grid grid-cols-9 justify-items-center gap-8"
      >
        {icons.map((i, ind) => {
          return (
            <motion.span
              viewport={{ once: true }}
              key={ind}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: ind * 0.1 }}
              whileHover={{ scale: 1.5 }}
              className="cursor-pointer"
              aria-label={ind}
            >
              {i}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
