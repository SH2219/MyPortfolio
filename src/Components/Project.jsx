import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="text-center text-white mt-20 text-6xl"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        My <span className="text-orange-600">Projects</span>
      </div>
      <div
        className="grid grid-cols-3 grid-rows-2 gap-4 m-20"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto rounded-2xl transition-opacity duration-300 transform custom-hover"
            src="Imgs/weather.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Weather App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://weather-78d4c.web.app/" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>

        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto img rounded-2xl transition-opacity duration-300 transform hover:opacity-20"
            src="Imgs/rec1.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Recipe App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://recipe-f88ea.web.app/" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>
        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto img rounded-2xl transition-opacity duration-300 transform hover:opacity-20"
            src="Imgs/blogg.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Blog App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://blogg-b55a1.web.app/" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>
        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto img rounded-2xl transition-opacity duration-300 transform hover:opacity-20"
            src="Imgs/quiz.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Quiz App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://quizz-988b9.web.app/" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>
        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto img rounded-2xl transition-opacity duration-300 transform hover:opacity-20"
            src="Imgs/cal.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Calculator App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://github.com/SH2219/Calculator.git" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>
        <div className="relative bg-gray-200 rounded-3xl h-60 overflow-hidden duration-300 hover-parent ">
          <img
            className="w-auto img rounded-2xl transition-opacity duration-300 transform hover:opacity-20"
            src="Imgs/Tic.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover-child">
            <h1 className="text-2xl text-orange-500 opacity-1 font-bold">
              Tic-Tac-Toe App
            </h1>
            <p className="text-sm  text-white">
              Weather app for weather updates and forecasts
            </p>
            <a href="https://github.com/SH2219/Tic-Tac-Toe.git" className="mt-2 underline">
              <img className="w-20" src="Imgs/link.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="text-white mt-2 mb-2 text-xl bg-orange-600 px-5 py-2 rounded-xl hover:text-orange-600 hover:bg-transparent hover:border hover:border-orange-600 transition-all duration-200">
          All Projects
        </button>
      </div>

   
    </>
  );
};

export default Project;
