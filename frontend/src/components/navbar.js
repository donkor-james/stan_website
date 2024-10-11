import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import stan from "../images/stan.jpg";

const Navbar = () => {
  const [hamburgerController, sethamburgerController] = useState("hidden");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleSidebar = () => {
    if (hamburgerController == "hidden") {
      sethamburgerController("flex");
    } else {
      sethamburgerController("hidden");
    }
  };
  return (
    <div>
      <nav className="px-4 border-b-1 flex justify-between items-center nav">
        <div className="flex items-center">
          <img
            src={stan}
            alt="Business Logo"
            className="h-[10px] md:w-28 w-24 mr-3 md:my-0 my-3 rounded"
          />
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button
            id="hamburger"
            className="text-white focus:outline-none"
            onClick={() => {
              handleSidebar();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 text-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center mr-20">
          <div className="flex items-center">
            <div className="current px-7 py-6 text-lg hover:text-yellow-400">
              <Link to="/">Home</Link>
            </div>
            <div className="text-grey-600 px-5 text-lg hover:text-yellow-400">
              <Link to="/services">Services</Link>
            </div>
            <div className="text-grey-600 px-5 text-lg hover:text-yellow-400">
              <Link to="/about">About Us</Link>
            </div>
            <div className="text-grey-600 px-5 text-lg hover:text-yellow-400">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <a
            href="#"
            className="bg-yellow-400 text-black font-normal py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
          >
            Book Us Today
          </a>
        </div>
      </nav>
      <div
        id="sidebar"
        className={`fixed inset-0 bg-opacity-75 z-50 ${hamburgerController}`}
      >
        <div className="bg-gray-800 w-64 h-full p-4 relative ">
          <button
            id="close-sidebar"
            className="text-white mb-4 absolute right-5 top-2 w-4"
            onClick={() => {
              handleSidebar();
            }}
          >
            X
          </button>
          <div className="flex flex-col space-y-4 mt-8">
            <a href="#" className="text-white text-lg hover:text-yellow-400">
              Home
            </a>
            <div className="text-white text-lg hover:text-yellow-400">
              <Link to="/services">Services</Link>
            </div>
            <a href="#" className="text-white text-lg hover:text-yellow-400">
              About Us
            </a>
            <a href="#" className="text-white text-lg hover:text-yellow-400">
              Contact Us
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-black font-normal py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
            >
              Book Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
