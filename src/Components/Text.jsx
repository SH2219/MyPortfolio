import React from "react";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const Text = () => {
  return (
    <>
      <section className="pt-52 px-44 sm:pt-sm-0 w-auto">
        <motion.div
          className=""
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="text-3xl mb-2 ">
            Hello, I am
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-5xl text-orange-500 mt-2"
          >
            Shridhar Galagali
          </motion.h1>
          <motion.h1 variants={textVariants} className="text-3xl mt-2">
            & I'm a Web Developer
          </motion.h1>
        </motion.div>
        <motion.div
          variants={textVariants}
          className=""
          initial="initial"
          animate="animate"
        >
          <SocialMedia />
          <a href="/Shridhar_resume-0324.pdf" download>
            <motion.button
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="mt-20 text-xl bg-orange-600 px-5 py-2 rounded-xl hover:text-orange-600 hover:bg-transparent hover:border hover:border-orange-600 transition-all duration-200"
              // animate={{ y: 10, x: 100, rotate: 360 }}
              // initial={{ y: 40, x: 200 }}
              // transition={{ duration: 1 }}
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Text;
