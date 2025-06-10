import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer2 = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Four equal columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Column 1: Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">{t('footer.title')}</h3>
            <form>
              <div className="relative">
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-full p-2 pe-16 text-xs bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  id="email"
                  type="email"
                  placeholder={t('footer.placeholder')}
                />
                <button
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-green-700"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </form>
            <p className="mt-2 text-[10px] text-gray-400">{t('footer.description')}</p>
          </div>

          {/* Column 2: About */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">About</p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">Who We Are</Link></li>
              <li><Link to="#" className="hover:text-white transition">Mission</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Events */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">Events</p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="#" className="hover:text-white transition">Upcoming</Link></li>
              <li><Link to="#" className="hover:text-white transition">Past</Link></li>
              <li><Link to="#" className="hover:text-white transition">Partner</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">Contact</p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition">Get In Touch</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <p className="text-center text-[10px] text-gray-400">
            &copy; {new Date().getFullYear()} IndabaX Botswana Junior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;