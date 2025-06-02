import { WEB3_ACCESS_KEY } from "@/assests/Data";
import React, { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsMailbox2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const contactDetails = [
    {
      icon: <IoLocationOutline className="w-10 h-10" />,
      des: "Kerala, India",
    },
    {
      icon: <BsMailbox2 className="w-10 h-10" />,
      des: "gauthamisankaramangalam@gmail.com",
    },
    {
      icon: <FaPhone className="w-10 h-10" />,
      des: "+91-8547111244",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      viewport={{ once: true }}
      className=" w-full px-[3%] py-10 scroll-mt-20 mx-auto "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-5  "
        viewport={{ once: true }}
      >
        Connect with me
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="flex flex-col  max-w-5xl mx-auto"
        onSubmit={onSubmit}
        viewport={{ once: true }}
      >
        <div className="mt-5 flex gap-16 w-full  justify-center items-center ">
          <div className="flex flex-col gap-9 w-1/2 justify-center  ">
            {contactDetails?.map((item) => (
              <div className="flex gap-5  items-center text-lg">
                <span> {item.icon}</span>
                <span>{item.des}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 w-full pt-5">
            {/* <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center text-5xl font-Ovo"
              viewport={{ once: true }}
            >
              Get in touch
            </motion.h2> */}

            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              placeholder="Enter your name"
              required
              viewport={{ once: true }}
              className="flex-1 p-3  outline-none  border-[0.5px] dark:border border-gray-400 rounded-xl bg-white dark:bg-black"
            />
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              placeholder="Enter your email"
              required
              viewport={{ once: true }}
              className="flex-1 p-3  outline-none  border-[0.5px] dark:border border-gray-400 rounded-xl bg-white dark:bg-black"
            />

            <motion.textarea
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="w-full p-4 outline-none border-[0.5px] dark:border  border-gray-400 rounded-xl bg-white mb-6 dark:bg-black"
              rows="6"
              placeholder="Enter your message"
              required
            />
            <motion.button
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              type="submit"
              className="py-3 px-8 w-max  flex items-center justify-between gap-2 bg-black dark:border text-white transition ease-in-out rounded-full mx-auto hover:bg-black hover:scale-110 delay-500 "
            >
              Submit now <FaLocationArrow className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
