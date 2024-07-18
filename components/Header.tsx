"use client";

import Button from "./Button";
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        // Change 100 to your desired scroll threshold
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        id="header"
        className={`${isSticky ? "sticky" : "fixed top-0 left-0"} w-full z-50`}
      >
        <div className="container border-b border-white mx-auto px-4">
          <div className="relative z-10 py-8">
            <div className="flex items-center justify-between">
              <div className="lg:w-1/5 sm:w-1/2">
                <a href="#" className="text-white text-2xl font-bold">
                  Noman Jawad
                </a>
              </div>
              <div className="w-1/2 text-right">
                <button
                  className="lg:hidden sm:flex w-full  justify-end text-xl cursor-pointer"
                  id="mobile-toggle"
                  onClick={toggleOffcanvas}
                >
                  <i>
                    <FaBars />
                  </i>
                </button>
                <div
                  id="nav-menu"
                  className={`lg:block ${
                    isOffcanvasOpen ? "offcanvas" : "hidden"
                  }`}
                >
                  <button
                    id="close"
                    className={`${
                      isOffcanvasOpen ? "block" : "hidden"
                    } cursor-pointer`}
                    onClick={toggleOffcanvas}
                  >
                    <RiCloseFill />
                  </button>
                  <nav className="w-full">
                    <ul className="flex justify-end">
                      <li className="mx-4">
                        <a href="#" className="text-white">
                          Home
                        </a>
                      </li>
                      <li className="mx-4">
                        <a href="#" className="text-white">
                          About
                        </a>
                      </li>
                      <li className="mx-4">
                        <a href="#" className="text-white">
                          Portfolio
                        </a>
                      </li>
                      <li className="mx-4">
                        <a href="#" className="text-white">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="w-1/6 sm:hidden lg:block text-right md:block">
                <Button href="/contact">Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
