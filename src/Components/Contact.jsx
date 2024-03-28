import Aos from "aos";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <h1 className="text-center text-white mt-32 text-6xl">
        Contact <span className="text-orange-600">Me</span>
      </h1>
      <div className="text-white flex mt-20 mb-20">
        <div
          className="flex-col justify-start ml-36 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="font-bold text-5xl mb-10">Let's Work Together</h1>
          <div className="flex items-center m-8">
            <img className="w-12 mr-5" src="Imgs/gmail_732200.png" alt="" />
            <span>shridhar2016galagali@gmail.com</span>
          </div>
          <div className="flex items-center m-8">
            <img className="w-12 mr-5" src="Imgs/address.png" alt="" />
            <span>Belgaum, Ka</span>
          </div>
          <div className="flex items-center m-8">
            <img
              className="w-12 mr-5"
              src="Imgs/receiver_11053932.png"
              alt=""
            />
            <span>+91 8310850174</span>
          </div>
        </div>
        <div
          class="max-w-md mx-auto p-6 bg-transparent text-white rounded-md shadow-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <form className="w-96">
            <div class="relative mb-4">
              <input
                type="text"
                id="name"
                name="name"
                class="block w-full px-4 py-2 border rounded-md border-white text-white bg-transparent shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50"
              />
              <label
                for="name"
                class="absolute top-0 left-0 px-4 py-2 text-sm text-white pointer-events-none"
              >
                Name
              </label>
            </div>
            <div class="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                class="block w-full px-4 py-2 border rounded-md border-white text-white bg-transparent shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50"
              />
              <label
                for="email"
                class="absolute top-0 left-0 px-4 py-2 text-sm text-white pointer-events-none"
              >
                Email
              </label>
            </div>
            <div class="relative mb-4">
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full border px-4 py-2 rounded-md border-white text-white bg-transparent shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50"
              ></textarea>
              <label
                for="message"
                class="absolute top-0 left-0 px-4 py-2 text-sm text-white pointer-events-none"
              >
                Message
              </label>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="w-full text-white mt-2 mb-2 text-xl bg-orange-600 px-5 py-2 rounded-xl hover:text-orange-600 hover:bg-transparent hover:border hover:border-orange-600 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-900 text-white  py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-l mx-auto">
              © 2024 <span className="text-orange-600">Shridhar</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
