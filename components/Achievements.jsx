import React from "react";
import { motion } from "framer-motion";
import { achievements } from "@/assests/Data";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="achievements"
      className="w-full px-[12%] py-16 scroll-mt-20 mx-auto bg-gray-50 dark:bg-darkBg"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-Ovo mb-12 dark:text-white"
      >
        Achievements
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-darkElement rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                {item.date}
              </p>
              <p className="text-gray-600 dark:text-gray-200 mt-3">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
