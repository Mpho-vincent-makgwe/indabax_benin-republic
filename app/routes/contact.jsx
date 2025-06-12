import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import SectionHeader from "../components/home/SectionHeader";
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiGlobalLine,
  RiSendPlaneLine
} from "react-icons/ri";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <section className={`min-h-screen py-20 ${isDark ? "bg-black text-gray-200" : "bg-white text-gray-800"}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <SectionHeader 
          title={t('contact.title')}
          theme={theme}
          underlineColor="bg-green-900"
          textColor={isDark ? "text-white" : "text-green-900"}
        />

        {/* Contact Cards + Form */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl ${isDark ? "bg-gray-900 border border-gray-700 shadow-lg shadow-white/10" : "bg-gray-50 shadow-md"} flex items-start gap-4`}>
              <div className={`p-3 rounded-full ${isDark ? "bg-green-900/50" : "bg-green-100"} text-green-700`}>
                <RiMapPinLine className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.venue.title')}</h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>{t('contact.venue.address')}</p>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? "bg-gray-900 border border-gray-700 shadow-lg shadow-white/10" : "bg-gray-50 shadow-md"} flex items-start gap-4`}>
              <div className={`p-3 rounded-full ${isDark ? "bg-orange-500/20" : "bg-orange-100"} text-orange-500`}>
                <RiMailLine className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.email.title')}</h3>
                <div className="space-y-1">
                  <a 
                    href="mailto:indabax-benin@googlegroups.com" 
                    className={`block hover:underline ${isDark ? "text-orange-400" : "text-orange-600"}`}
                  >
                    indabax-benin@googlegroups.com
                  </a>
                  <a 
                    href="mailto:deeplearningbenin@gmail.com" 
                    className={`block hover:underline ${isDark ? "text-orange-400" : "text-orange-600"}`}
                  >
                    deeplearningbenin@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? "bg-gray-900 border border-gray-700 shadow-lg shadow-white/10" : "bg-gray-50 shadow-md"} flex items-start gap-4`}>
              <div className={`p-3 rounded-full ${isDark ? "bg-green-900/50" : "bg-green-100"} text-green-700`}>
                <RiPhoneLine className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.phone.title')}</h3>
                <a 
                  href="tel:+22994266131" 
                  className={`hover:underline ${isDark ? "text-green-400" : "text-green-700"}`}
                >
                  +229 94 26 61 31
                </a>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? "bg-gray-900 border border-gray-700 shadow-lg shadow-white/10" : "bg-gray-50 shadow-md"} flex items-start gap-4`}>
              <div className={`p-3 rounded-full ${isDark ? "bg-orange-500/20" : "bg-orange-100"} text-orange-500`}>
                <RiGlobalLine className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.website.title')}</h3>
                <a
                  href="https://indabaxbenin.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${isDark ? "text-orange-400" : "text-orange-600"}`}
                >
                  https://indabaxbenin.github.io/
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-xl ${isDark ? "bg-gray-900 border border-gray-700 shadow-lg shadow-white/10" : "bg-gray-50 shadow-xl"}`}>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-green-900"}`}>
              {t('contact.form.title')}
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? "bg-gray-800 border-gray-700 focus:border-green-500" : "border-gray-300 focus:border-green-700"} focus:outline-none focus:ring-1 ${isDark ? "focus:ring-green-500" : "focus:ring-green-700"}`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? "bg-gray-800 border-gray-700 focus:border-green-500" : "border-gray-300 focus:border-green-700"} focus:outline-none focus:ring-1 ${isDark ? "focus:ring-green-500" : "focus:ring-green-700"}`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? "bg-gray-800 border-gray-700 focus:border-green-500" : "border-gray-300 focus:border-green-700"} focus:outline-none focus:ring-1 ${isDark ? "focus:ring-green-500" : "focus:ring-green-700"}`}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {t('contact.form.submit')}
                <RiSendPlaneLine className="text-lg" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-10">
          <h3 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-white" : "text-green-900"}`}>
            {t('contact.map.title')}
          </h3>
          <div className={`rounded-xl overflow-hidden shadow-xl ${isDark ? "border border-gray-700" : "border border-gray-200"}`}>
            <iframe
              title={t('contact.map.title')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.49252882434!2d2.329305839550773!3d6.450289500000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a95a1d46b5bb%3A0xd8d3154c7f3cf9a4!2sUniversit%C3%A9%20d'Abomey-Calavi%20(UAC%20-%20Entr%C3%A9e%20principale)!5e0!3m2!1sen!2sza!4v1747484638103!5m2!1sen!2sza"
              className="w-full h-[400px] md:h-[500px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Social Media Links (optional) */}
        <div className="text-center mt-12">
          <h4 className={`text-xl mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {t('contact.social.title')}
          </h4>
          <div className="flex justify-center gap-4">
            {/* Add your social media icons and links here */}
            {/* Example:
            <a href="#" className={`p-3 rounded-full ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}>
              <RiTwitterXLine className="text-xl" />
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;