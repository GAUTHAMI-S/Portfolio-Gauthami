import React from "react";
import { motion } from "framer-motion";
import EducationTimeline from "./EducationTimeline";
const About = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-24 scroll-mt-20 mx-auto flex  flex-col items-center justify-center"
    >
      <motion.h4
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center max-x-2xl mx-auto mb-12 font-Ovo"
      >
        My Love for the code grows everyday!!!
      </motion.p>
      <div className="flex flex-col items-center md:flex-row gap-8 ">
        {/* <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          {" "}
          <img
            src='./profile.jpg'
            alt="pic "
            className="w-full rounded-3xl"
          />
        </motion.div> */}
         
        <div className="flex-1  ">
        
            <div className="box">
              <EducationTimeline />
            </div>
          
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-10 max-w-2xl mx-auto "
          >
            I’m a Software Engineer building clean, performant web applications. I care deeply about readable code, predictable UX, and small
            performance wins that add up. I enjoy collaborating with cross-functional teams,
            learning new tools quickly, and shipping features that are reliable in
            production.
          </motion.p>

          <motion.ul
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="list-disc pl-5 space-y-1 text-left"
          >
            <li>Frontend: React/Next.js, TypeScript, Tailwind; responsive & dark-mode design.</li>
            <li>Platform work: modular features for IIoT dashboards and data workflows.</li>
            <li>Integrations: REST APIs, Node/Express, PostgreSQL/MongoDB, Dockerized environments.</li>
            <li>Mindset: fast learner, clean abstractions, collaborative and feedback-driven.</li>
          </motion.ul>


         
        </div>
      </div>
    </motion.div>
  );
};

export default About;
