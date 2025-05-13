import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: icon library

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Site Name */}
          <div className="flex-shrink-0 text-2xl font-bold text-green-600 dark:text-yellow-400 font-[Montserrat]">
            <Link to="/">IndabaX BJ</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 font-semibold text-gray-800 dark:text-gray-200">
            <Link to="/">Home</Link>
            {/* <Link to="/culture">Culture</Link> */}
            <Link to="/contact">Contact</Link>
            {/* <Link to="/community">Community</Link> */}
            {/* <Link to="/events">Events</Link> */}
            <Link to="/join" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">Join</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-4 space-y-2 text-gray-800 dark:text-gray-200 font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          {/* <Link to="/community" onClick={() => setIsOpen(false)}>Community</Link> */}
          {/* <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link> */}
          <Link to="/join" onClick={() => setIsOpen(false)} className="block bg-green-600 text-white px-4 py-1 rounded">Join</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
