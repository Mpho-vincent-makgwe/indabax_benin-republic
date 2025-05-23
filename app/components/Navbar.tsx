import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '/assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { events } from '../BackEnd/data';


interface NavLink {
  path: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Get the latest upcoming event
  const latestEvent = events
    .filter((e: { date: Date | string }) => new Date(e.date) > new Date())
    .sort((a: { date: Date | string }, b: { date: Date | string }) => 
      +new Date(a.date) - +new Date(b.date))[0];

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/events', label: 'Events' },
    { path: '/culture', label: 'Culture' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 shadow-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="IndabaX Logo"
                className="h-10 w-10 object-contain rounded-full border-2 border-gray-300"
              />
              <span className={`text-xl font-bold font-[Montserrat] ${theme === 'dark' ? 'text-green-300' : 'text-green-600'}`}>
                IndabaX BJ
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 font-semibold items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition hover:text-green-600 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Register Button - Links to latest event */}
            <Link
              to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              Register Now
            </Link>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 space-y-3 font-semibold shadow-md transition-all duration-300 ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white/90 text-black'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-gray-300 hover:text-green-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700 transition"
          >
            Register
          </Link>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-yellow-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-gray-800" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;