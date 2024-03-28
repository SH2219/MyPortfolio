import React, { useEffect, useState } from "react";
import { Link, ScrollLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-transparent transition">
        <ul className=" text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-orange-600 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-orange-600  hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-orange-600  hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-orange-600  hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-orange-600  hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <nav>
        <div className="{`navbar ${scrolled ? 'bg-gray-800' : ''} fixed top-0 left-0 w-full flex flex-row justify-between z-50 text-white lg:py-5 px-20 py-4 transition-all duration-300}">
          <div className="flex items-center flex-1">
            <img className="w-10" src="/svg.png" alt="" />
          </div>
          <div className="lg:flex md:flex-1 lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10 ">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <li>
                  <a
                    href="#Home"
                    className="hover:text-orange-600 transition-all duration-300 hover:border-b-2 hover:border-orange-600 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="hover:text-orange-600 transition-all duration-300 hover:border-b-2 hover:border-orange-600 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="hover:text-orange-600 transition-all duration-300 hover:border-b-2 hover:border-orange-600 cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Services"
                    className="hover:text-orange-600 transition-all duration-300 hover:border-b-2 hover:border-orange-600 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="hover:text-orange-600 transition-all duration-300 hover:border-b-2 hover:border-orange-600 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes className="text-white w-8" /> : <CiMenuFries className="text-white text-lg" />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
