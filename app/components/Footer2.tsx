import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer2 = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}>
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <strong className={`block text-xl font-bold sm:text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Stay in the loop with IndabaX BJ updates
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className={`w-full rounded-full p-4 pe-32 text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-200 border-gray-300 text-gray-900'}`}
                id="email"
                type="email"
                placeholder="indaba@deepmind.com"
              />
              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div>
            <p className={`mt-4 text-center lg:text-left lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              IndabaX BJ is committed to empowering local talent through AI education, community building, and innovation. Join us and be part of the next AI revolution in Botswana!
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {/* Social icons would go here */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</p>
              <ul className="mt-4 space-y-2">
                <li><Link to="/about" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Who We Are</Link></li>
                <li><Link to="#" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Our Mission</Link></li>
                <li><Link to="/team" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Team</Link></li>
              </ul>
            </div>

            <div>
              <Link to="/events">
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Events</p>
              </Link>
              <ul className="mt-4 space-y-2">
                <li><Link to="#" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Upcoming</Link></li>
                <li><Link to="#" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Past Highlights</Link></li>
                <li><Link to="#" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Partner with Us</Link></li>
              </ul>
            </div>

            <div>
              <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</p>
              <ul className="mt-4 space-y-2">
                <li><Link to="/contact" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Get in Touch</Link></li>
                <li><Link to="/faq" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>FAQs</Link></li>
                <li><Link to="#" className={`hover:opacity-75 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-12 border-t pt-8 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-center text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} IndabaX Botswana Junior. Empowering the next generation of AI leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;