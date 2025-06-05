import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import logo from '/assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { events } from '../BackEnd/data';
import { useTranslation } from 'react-i18next';


type TranslationKey = 'navbar.about' | 'navbar.faq' | 'navbar.events' | 'navbar.culture' | 'navbar.contact' | 'navbar.register' | 'navbar.toggleTheme';

interface NavLink {
  path: string;
  label: string;
  translationKey: TranslationKey
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Get the latest upcoming event
  const latestEvent = events
    .filter((e: { date: Date | string }) => new Date(e.date) > new Date())
    .sort((a: { date: Date | string }, b: { date: Date | string }) => 
      +new Date(a.date) - +new Date(b.date))[0];

  const navLinks: NavLink[] = [
    { path: '/about', label: 'About', translationKey: 'navbar.about' },
    { path: '/faq', label: 'FAQ', translationKey: 'navbar.faq' },
    { path: '/events', label: 'Events', translationKey: 'navbar.events' },
    { path: '/culture', label: 'Culture', translationKey: 'navbar.culture' },
    { path: '/contact', label: 'Contact', translationKey: 'navbar.contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
    if (isOpen) setIsOpen(false); // Close mobile menu if open
  };

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
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
                {t(link.translationKey)}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className={`flex items-center gap-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm uppercase">{i18n.language}</span>
              </button>
              
              {showLanguageDropdown && (
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language === lang.code 
                          ? theme === 'dark' 
                            ? 'bg-gray-700 text-green-400' 
                            : 'bg-gray-100 text-green-600'
                          : theme === 'dark' 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-black hover:bg-gray-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Register Button - Links to latest event */}
            <Link
              to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              {t('navbar.register')}
            </Link>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title={t('navbar.toggleTheme')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className={`p-2 rounded-full ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <Languages className="w-5 h-5" />
            </button>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
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
          {/* Language Dropdown for Mobile */}
          {showLanguageDropdown && (
            <div className="mb-4 space-y-2">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    i18n.language === lang.code 
                      ? theme === 'dark' 
                        ? 'bg-gray-700 text-green-400' 
                        : 'bg-gray-200 text-green-600'
                      : theme === 'dark' 
                        ? 'text-white hover:bg-gray-700' 
                        : 'text-black hover:bg-gray-100'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-gray-300 hover:text-green-600 transition"
            >
              {t(link.translationKey)}
            </Link>
          ))}
          <Link
            to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700 transition"
          >
            {t('navbar.register')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;