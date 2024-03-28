import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({duration:3000});
  }, []);
  //   const ref = useRef();
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start start", "end start"],
  //   });ref={ref}
  //   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  //   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div className="">
        <div className="flex ">
          <img
            // animate={{ x: 0, opacity: 1 }}
            // initial={{ opacity: 0, x: -180 }}
            // transition={{
            //   ease: "linear",
            //   duration: 1,
            //   x: { duration: 2 },
            // }}
            // style={{ x: yBg }}style={{ x: yText }}
            data-aos="zoom-in-right"
            className="w-96 rounded-lg m-20 ml-32"
            src="/Imgs/about.jpg"
            alt=""
          />
          <div className="" data-aos='fade-up-left'>
            <h1 className="text-white text-6xl m-20 ">
              About <span className="text-orange-600">Me</span>
            </h1>
            <p className="text-white text-3xl m-20 mt-10 leading-10 text-justify">
              <h1 className="text-4xl mb-2 font-bold">
                Welcome to my portfolio, I'm <span className="text-orange-600">Shridhar</span>  a
              </h1>
              Frontend developer with good problem-solving abilities. HTML, CSS,
              and JavaScript expert with expertise designing responsive web
              interfaces with React.js, Bootstrap & TailwindCss. Committed to
              providing engaging user experiences through elegant design,
              superior performance, and creative solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
