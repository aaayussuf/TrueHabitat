import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-black tracking-wide">
              TRUEHABITAT
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black font-medium hover:text-gray-700">
              Home
            </Link>
            <Link to="/about" className="text-black font-medium hover:text-gray-700">
              About
            </Link>
            <Link to="/properties" className="text-black font-medium hover:text-gray-700">
              Properties
            </Link>
            <Link to="/agents" className="text-black font-medium hover:text-gray-700">
              Agents
            </Link>
            <Link to="/blogs" className="text-black font-medium hover:text-gray-700">
              Blogs
            </Link>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">
              Contact Us Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/properties"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/agents"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Agents
            </Link>
            <Link
              to="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <button
              className="w-full text-left px-3 py-2 mt-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
