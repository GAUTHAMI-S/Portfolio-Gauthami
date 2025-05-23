import { slides } from "@/assests/Data";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Project = () => {
  const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative bg-blue-200  w-full max-w-2xl  shadow-lg rounded-2xl p-6 overflow-hidden dark:bg-darkElement"
        >
          <div className="w-full h-72 flex items-center justify-center overflow-hidden  ">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].img}
                src={slides[current].img}
                alt="Slide"
                className="w-72 h-72 object-cover rounded-xl shadow-lg"
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {slides[current].title}
                </h2>
                <p className="text-gray-600 dark:text-white mt-2">
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
      className=" w-full px-[12%] py-10 scroll-mt-20 mx-auto  flex flex-col items-center justify-center "
    >
      
      <motion.h2
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
