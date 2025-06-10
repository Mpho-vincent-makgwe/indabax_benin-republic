import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, ChevronUp, Globe, Home } from 'lucide-react';
import logo from '/assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { events } from '../BackEnd/data';
import { useTranslation } from 'react-i18next';

type TranslationKey = 'navbar.about' | 'navbar.faq' | 'navbar.events' | 'navbar.culture' | 'navbar.contact' | 'navbar.register' | 'navbar.toggleTheme' | 'navbar.language' | 'navbar.home';

interface NavLink {
  path: string;
  label: string;
  translationKey: TranslationKey;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const desktopLanguageButtonRef = useRef<HTMLButtonElement>(null);
  const tabletLanguageButtonRef = useRef<HTMLButtonElement>(null);
  const mobileLanguageButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Set French as default language if none is set
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('fr');
    }
  }, [i18n]);

  // Get the latest upcoming event
  const latestEvent = events
    .filter((e: { date: Date | string }) => new Date(e.date) > new Date())
    .sort((a: { date: Date | string }, b: { date: Date | string }) => 
      +new Date(a.date) - +new Date(b.date))[0];

  const navLinks: NavLink[] = [
    { path: '/', label: 'Home', translationKey: 'navbar.home' },
    { path: '/about', label: 'About', translationKey: 'navbar.about' },
    { path: '/faq', label: 'FAQ', translationKey: 'navbar.faq' },
    { path: '/events', label: 'Events', translationKey: 'navbar.events' },
    { path: '/culture', label: 'Culture', translationKey: 'navbar.culture' },
    { path: '/contact', label: 'Contact', translationKey: 'navbar.contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      setShowLanguageDropdown(false);
    });
  };

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
      
      const isOutsideDesktopLanguage = desktopLanguageButtonRef.current && 
        !desktopLanguageButtonRef.current.contains(event.target as Node) && 
        !(event.target as Element).closest('.desktop-language-button');
      
      const isOutsideTabletLanguage = tabletLanguageButtonRef.current && 
        !tabletLanguageButtonRef.current.contains(event.target as Node) && 
        !(event.target as Element).closest('.tablet-language-button');
      
      const isOutsideMobileLanguage = mobileLanguageButtonRef.current && 
        !mobileLanguageButtonRef.current.contains(event.target as Node) && 
        !(event.target as Element).closest('.mobile-language-button');
      
      if (isOutsideDesktopLanguage && isOutsideTabletLanguage && isOutsideMobileLanguage) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setShowLanguageDropdown(false);
  };

  return (
    <nav className={`fixed w-full z-50 shadow-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
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

          {/* Desktop Navigation - shown only on large screens */}
          <div className="hidden lg:flex space-x-6 font-semibold items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition hover:text-green-600 px-2 py-1 rounded ${
                  theme === 'dark' 
                    ? `text-white hover:bg-gray-700 ${location.pathname === link.path ? 'bg-gray-700 text-green-400' : ''}`
                    : `text-black hover:bg-gray-100 ${location.pathname === link.path ? 'bg-gray-100 text-green-600' : ''}`
                }`}
              >
                {t(link.translationKey)}
              </Link>
            ))}

            {/* Register Button */}
            <Link
              to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
            >
              {t('navbar.register')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                ref={desktopLanguageButtonRef}
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className={`flex items-center gap-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition desktop-language-button ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
                aria-label={t('navbar.language')}
                aria-expanded={showLanguageDropdown}
                aria-haspopup="true"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm uppercase">{i18n.language}</span>
                {showLanguageDropdown ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
              
              {showLanguageDropdown && (
                <div 
                  className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 border ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                  role="menu"
                >
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
                      role="menuitem"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label={t('navbar.toggleTheme')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" aria-hidden="true" />
              )}
              <span className="sr-only">{t('navbar.toggleTheme')}</span>
            </button>
          </div>

          {/* Tablet Navigation - shown on medium screens */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {/* Register Button */}
            <Link
              to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
            >
              {t('navbar.register')}
            </Link>

            {/* Language and Theme buttons */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  ref={tabletLanguageButtonRef}
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className={`flex items-center gap-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition tablet-language-button ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm uppercase">{i18n.language}</span>
                  {showLanguageDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {showLanguageDropdown && (
                  <div 
                    className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 border ${
                      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}
                  >
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

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>

            {/* Menu Button for Tablet */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button - shown on small screens */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              aria-label={t('navbar.toggleTheme')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" aria-hidden="true" />
              )}
              <span className="sr-only">{t('navbar.toggleTheme')}</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none mobile-menu-button ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              aria-label={isOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <X size={24} aria-hidden="true" />
                  <span className="sr-only">{t('navbar.closeMenu')}</span>
                </>
              ) : (
                <>
                  <Menu size={24} aria-hidden="true" />
                  <span className="sr-only">{t('navbar.openMenu')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-full w-64 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex flex-col h-full p-4">
              {/* Close Button - hidden on tablet, shown on mobile */}
              <div className="flex justify-end md:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  aria-label={t('navbar.closeMenu')}
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 mt-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-lg transition ${
                      theme === 'dark' 
                        ? `text-white hover:bg-gray-700 ${location.pathname === link.path ? 'bg-gray-700 text-green-400' : ''}`
                        : `text-black hover:bg-gray-100 ${location.pathname === link.path ? 'bg-gray-100 text-green-600' : ''}`
                    }`}
                  >
                    {link.path === '/' ? (
                      <span className="flex items-center">
                        <Home className="w-5 h-5 mr-2" />
                        {t(link.translationKey)}
                      </span>
                    ) : (
                      t(link.translationKey)
                    )}
                  </Link>
                ))}

                {/* Language Selector - hidden on tablet, shown on mobile */}
                <div className="relative mt-4 md:hidden">
                  <button
                    ref={mobileLanguageButtonRef}
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg mobile-language-button ${
                      theme === 'dark' 
                        ? 'text-white hover:bg-gray-700' 
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      {t('navbar.language')}
                    </span>
                    {showLanguageDropdown ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {showLanguageDropdown && (
                    <div 
                      className={`mt-1 ml-4 rounded-md ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      }`}
                    >
                      {availableLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`block w-full text-left px-4 py-2 text-sm rounded ${
                            i18n.language === lang.code 
                              ? theme === 'dark' 
                                ? 'bg-gray-600 text-green-400' 
                                : 'bg-gray-200 text-green-600'
                              : theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-black hover:bg-gray-200'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Register Button */}
                <Link
                  to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
                  onClick={handleLinkClick}
                  className={`block mt-4 px-4 py-3 rounded-lg text-center font-medium ${
                    theme === 'dark' 
                      ? 'bg-green-700 text-white hover:bg-green-600' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {t('navbar.register')}
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;