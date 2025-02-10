import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";

const icons = [
  <FaHtml5 className="w-10 h-10 " />,
  <IoLogoCss3 className="w-10 h-10 " />,
  <IoLogoJavascript className="w-10 h-10" />,
  <FaReact className="w-10 h-10 " />,
  <SiNextdotjs className="w-10 h-10" />,
  <SiPython className="w-10 h-10" />,
  <TbSql className="w-11 h-11" />,
  <FiFramer className="w-10 h-10" />,
];
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="h-full w-full px-[12%] py-24 scroll-mt-20 mx-auto flex  flex-col items-center justify-center"
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
        className="text-center text-5xl font-Ovo"
      >
        Tech Stack
      </motion.h2>
      <p className="text-center max-x-2xl mx-auto. mb-12 font-Ovo">
        The skills, tools and technologies i use:
      </p>
      <motion.div className="grid grid-cols-7 justify-items-center gap-8">
        {icons.map((i, ind) => {
          return (
            <motion.span
              key={ind}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: ind * 0.2, }}
              whileHover={{ scale: 1.5 }}
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
