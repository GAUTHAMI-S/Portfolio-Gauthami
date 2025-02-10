import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

const icons = [
  <FaHtml5 className="w-10 h-10" />,
  <IoLogoCss3 className="w-10 h-10" />,
  <IoLogoJavascript className="w-10 h-10" />,
  <FaReact className="w-10 h-10" />,
  <SiNextdotjs className="w-10 h-10" />,
  <SiPython className="w-10 h-10" />,
  <TbSql className="w-11 h-11" />,
];
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="h-full w-full px-[12%] py-10 scroll-mt-20 mx-auto flex  flex-col items-center justify-center"
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem saepe
        fugit,
      </p>
      <div className="relative w-[80%] overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <motion.div
          className="flex items-center space-x-8 flex-nowrap w-max justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          // transition={{
          //   repeat: Infinity,
          //   ease: "linear",
          //   duration: 25,
          //   repeatType: "loop",
          //   repeatDelay: 0,
          // }}
        >
          {[...icons].map((icon, index) => {
            return (
              <div key={index} className="">
                {icon}
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
