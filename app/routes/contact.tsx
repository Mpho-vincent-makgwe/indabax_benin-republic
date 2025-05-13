import React from 'react'
import Contact from '../components/contact/Contact';

const contact = () => {
  return (
    <div>
         <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 dark:text-yellow-400 mb-6 font-[Montserrat]">
          Contact IndabaX Benin Republic
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📍 Location</h2>
          <p>
            Université d'Abomey-Calavi, Benin Republic
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📧 Email</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="mailto:indabax-benin@googlegroups.com" className="text-blue-500 hover:underline">
                indabax-benin@googlegroups.com
              </a>
            </li>
            <li>
              <a href="mailto:deeplearningbenin@gmail.com" className="text-blue-500 hover:underline">
                deeplearningbenin@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📞 Phone</h2>
          <p>
            <a href="tel:+22994266131" className="text-blue-500 hover:underline">
              +229 94 26 61 31
            </a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🌐 Website</h2>
          <p>
            <a href="https://indabaxbenin.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://indabaxbenin.github.io/
            </a>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🗺️ Find Us on the Map</h2>
          <div className="w-full h-96">
            <iframe
              title="IndabaX Benin Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d2.340000!3d6.420000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023456789abcdef%3A0xabcdef1234567890!2sUniversit%C3%A9%20d'Abomey-Calavi!5e0!3m2!1sen!2sbj!4v1610000000000!5m2!1sen!2sbj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default contact