import React from "react";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" pt-20 md:pt-24 w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        <img
          src='./profile.jpg'
          alt="pic"
          className="rounded-full w-32 "
        />
      </motion.div>
      <motion.h3
        viewport={{ once: true }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Gauthami Sankaramangalam
      </motion.h3>
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-6.5xl font-Ovo"
      >
        Creative Full Stack Developer from India
      </motion.h1>
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I’m a Full Stack Developer driven by curiosity and a deep passion for
        building meaningful digital experiences. I enjoy exploring new
        technologies and applying what I learn to create clean, efficient, and
        impactful solutions. For me, coding is more than just solving problems —
        it’s about understanding challenges, designing smart solutions, and
        bringing ideas to life through code. I take ownership of my work, stay
        committed to continuous improvement, and strive to deliver with both
        precision and purpose.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          viewport={{ once: true }}
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
          href="/Gauthami_S.pdf"
          download
          viewport={{ once: true }}
          className=" px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <FaDownload className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
