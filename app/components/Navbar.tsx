import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: icon library
import logo from '/assets/logo.png'; // adjust path if needed

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Image */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="IndabaX Logo" className="h-10 w-auto object-contain" />
              {/* Optional: Add text next to logo */}
              <span className="text-xl font-bold text-green-600 font-[Montserrat]">IndabaX BJ</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 font-semibold text-black ">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/join" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">Join</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/70 px-4 pt-2 pb-4 space-y-2 text-black font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/join" onClick={() => setIsOpen(false)} className="block bg-green-600 text-white px-4 py-1 rounded">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
