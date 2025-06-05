import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`min-h-screen px-6 py-20 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-14 font-[Montserrat] ${
          theme === "dark" ? "text-green-300" : "text-green-800"
        }`}>
          {t('contact.title')}
        </h1>

        {/* Info + Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-2xl text-red-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">{t('contact.venue.title')}</h2>
                <p>{t('contact.venue.address')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-2xl text-blue-500 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">{t('contact.email.title')}</h2>
                <p>
                  <a href="mailto:indabax-benin@googlegroups.com" className="text-blue-700 hover:underline">
                    indabax-benin@googlegroups.com
                  </a>
                  <br />
                  <a href="mailto:deeplearningbenin@gmail.com" className="text-blue-700 hover:underline">
                    deeplearningbenin@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-2xl text-green-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">{t('contact.phone.title')}</h2>
                <a href="tel:+22994266131" className="text-green-700 hover:underline">
                  +229 94 26 61 31
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaGlobe className="text-2xl text-yellow-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">{t('contact.website.title')}</h2>
                <a
                  href="https://indabaxbenin.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:underline"
                >
                  https://indabaxbenin.github.io/
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-xl shadow-lg ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-50"
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === "dark" ? "text-green-300" : "text-green-800"
            }`}>
              {t('contact.form.title')}
            </h3>
            <form>
              <input
                type="text"
                placeholder={t('contact.form.name')}
                className={`w-full border rounded px-4 py-3 mb-4 ${
                  theme === "dark" ? "bg-gray-700 border-gray-600" : "border-gray-300"
                }`}
              />
              <input
                type="email"
                placeholder={t('contact.form.email')}
                className={`w-full border rounded px-4 py-3 mb-4 ${
                  theme === "dark" ? "bg-gray-700 border-gray-600" : "border-gray-300"
                }`}
              />
              <textarea
                placeholder={t('contact.form.message')}
                rows={4}
                className={`w-full border rounded px-4 py-3 mb-4 ${
                  theme === "dark" ? "bg-gray-700 border-gray-600" : "border-gray-300"
                }`}
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="w-full mb-4">
          <h2 className={`text-3xl font-semibold mb-6 text-center ${
            theme === "dark" ? "text-red-400" : "text-red-600"
          }`}>
            {t('contact.map.title')}
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl w-full h-[400px] md:h-[500px]">
            <iframe
              title={t('contact.map.title')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.49252882434!2d2.329305839550773!3d6.450289500000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a95a1d46b5bb%3A0xd8d3154c7f3cf9a4!2sUniversit%C3%A9%20d'Abomey-Calavi%20(UAC%20-%20Entr%C3%A9e%20principale)!5e0!3m2!1sen!2sza!4v1747484638103!5m2!1sen!2sza"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;