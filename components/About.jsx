import React from "react";
import { Education } from "@/assests/Data";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-24 scroll-mt-20 mx-auto flex  flex-col items-center justify-center"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center max-x-2xl mx-auto. mb-12 font-Ovo"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem saepe
        fugit,
      </motion.p>
      <div className="flex flex-col items-center md:flex-row gap-8 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          {" "}
          <img
            src="https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic "
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className="flex-1  ">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=" mb-10 max-w-2xl font-Ovo"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            exercitationem quisquam eveniet sit eaque, nihil, dolores voluptas
            accusamus totam enim quia inventore temporibus id harum dignissimos
            veritatis sint illo in!
          </motion.p>

          {Education.map((item) => {
            return (
              <div
                key={item.key}
                className="border-l border-black hover:to-lightHover hover:shadow-black"
              >
                {item.title}
                {item.cgpa}
              </div>
            );
          })}
          <div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
