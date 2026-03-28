import { slides } from "@/assests/Data";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { LuLink } from "react-icons/lu";


const Project = () => {
  const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
      <>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative  w-full h-full max-w-2xl  shadow-lg rounded-2xl p-6 overflow-hidden dark:bg-darkElement"
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden  ">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].img}
                src={slides[current].img}
                alt="Slide"
                className="w-auto h-72 object-cover rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          {/* Content Section */}
          <div className="text-center mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex md:flex-row flex-col gap-2 items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {slides[current].title}
                  </h2>
                  {slides[current]?.link && <a

                    href={slides[current]?.link}
                    className=" border dark:border-white  border-gray-500 flex items-center gap-2 px-2 py-1 w-[50%] sm:w-[25%] md:w-[20%] text-center rounded-full dark:text-white  text-black  "
                  >
                    Click Here <LuLink className="w-6 h-6" />
                  </a>}

                </div>
                <p className="text-gray-600 dark:text-white text-wrap mt-2">
                  {slides[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-800 transition"
              onClick={prevSlide}
            >
              <GrFormPrevious className="w-8 h-8" />
            </button>
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-800 transition"
              onClick={nextSlide}
            >
              <GrFormNext className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      </>
    );
  };

  return (
    <div
      id="project"
      className=" w-full px-auto py-10 scroll-mt-20 mx-auto  flex flex-col items-center justify-center "
    >
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-5"
      >
        My Projects
      </motion.h2>

      <Carousel />
    </div>
  );
};

export default Project;
