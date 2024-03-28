import Aos from "aos";
import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <h1 className="text-6xl mt-32 mb-20 text-white text-center">
        My<span className="text-orange-600"> Services</span>
      </h1>
      <div className="flex items-center text-center justify-center">
        <div
          className="max-w-md h-64 bg-slate-200 shadow-lg rounded-t-2xl rounded-b-2xl overflow-hidden m-4 border-t-8 border-b-8 border-orange-600 hover:bg-gray-100"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="p-6 hover:text-orange-600">
            <h1 className="font-bold text-3xl mt-3 mb-2">
              React.JS Development
            </h1>
            <p className="text-gray-600 mt-3">
              As a React developer, I provide specialized services in building
              and developing high-quality web applications that are easy to
              maintain using modern React.js technologies.
            </p>
          </div>
        </div>

        <div className="max-w-md h-64 bg-slate-200 shadow-lg rounded-t-2xl rounded-b-2xl overflow-hidden m-4 border-t-8 border-b-8 border-orange-600 hover:bg-gray-100" data-aos="fade-down"
     data-aos-duration="3000">
          <div className="p-6 hover:text-orange-600">
            <h1 className="font-bold text-3xl mt-3 mb-2">JS Development</h1>
            <p className="text-gray-600 mt-3">
              As a Javascript developer, I provide specialized services in
              building and developing high-quality web applications that are
              easy to maintain using modern Javasript technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
