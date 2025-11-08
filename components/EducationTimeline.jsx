import React, { useState } from "react";
import { Education } from "@/assests/Data"; // Import your education data
import { motion } from "framer-motion";

const EducationTimeline = () => {
  const [hovered, setHovered] = useState(null); // To track the hovered dot

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-24 mx-auto flex flex-col items-center justify-center"
    >
      <motion.h3
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-6 text-2xl font-Ovo"
      >
        Education Timeline
      </motion.h3>

      {/* Horizontal Timeline Container */}
      <div className="w-full relative flex items-center justify-between">
        {/* Timeline line */}
        <div className="absolute w-full h-2 bg-gray-300 top-1/2 -translate-y-1/2"></div>

        {/* Render Dots */}
        {Education.map((item, index) => (
          <motion.div
            key={item.key}
            onMouseEnter={() => setHovered(item.key)} // Set hovered item on mouse enter
            onMouseLeave={() => setHovered(null)} // Reset hovered item on mouse leave
            className="relative flex justify-center items-center"
          >
            {/* Dot representing the event year */}
            <div
              className={`w-8 h-8 rounded-full bg-blue-500 cursor-pointer ${
                hovered === item.key ? "scale-125" : ""
              } transition-all duration-300`}
            ></div>

            {/* Tooltip */}
            {hovered === item.key && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white shadow-lg rounded-md text-center">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-500">{item.duration}</p>
                <p className="font-bold">CGPA: {item.cgpa}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationTimeline;
