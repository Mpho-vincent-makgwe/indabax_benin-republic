import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";


const Contact = () => {
   const { theme } = useTheme(); 

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
          Contact IndabaX Benin 🇧🇯
        </h1>

        {/* Info + Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-2xl text-red-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Venue</h2>
                <p>Université d'Abomey-Calavi, Benin Republic</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-2xl text-blue-500 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
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
                <h2 className="text-xl font-semibold">Phone</h2>
                <a href="tel:+22994266131" className="text-green-700 hover:underline">
                  +229 94 26 61 31
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaGlobe className="text-2xl text-yellow-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Website</h2>
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
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-green-800">
              Send Us a Message
            </h3>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="w-full mb-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-red-600">
            📍 Université d'Abomey-Calavi on the Map
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl w-full h-[400px] md:h-[500px]">
            <iframe
              title="Université d'Abomey-Calavi Map"
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
