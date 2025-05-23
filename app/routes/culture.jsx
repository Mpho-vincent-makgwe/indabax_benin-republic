import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SparklesIcon, FilmIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const culture = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition`}>
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center text-center">
        <img
          src="https://via.placeholder.com/1200x400?text=Benin+Culture"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-70"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Culture & Community</h1>
          <p className="text-lg max-w-3xl mx-auto text-white">
            Celebrating the heart of IndabaX Benin: learning, unity, and African heritage.
          </p>
        </div>
      </section>

      {/* IndabaX Culture */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 flex items-center gap-2">
          <SparklesIcon className="h-6 w-6" /> The IndabaX Spirit
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="leading-relaxed">
              At the core of IndabaX is a culture of collaboration, continuous learning, and
              sharing knowledge across generations.
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1">
              <li>Learning through community</li>
              <li>Mentorship and support</li>
              <li>Local problems, global solutions</li>
              <li>Celebrating African excellence</li>
            </ul>
          </div>
          <img
            src="https://via.placeholder.com/400x250"
            alt="IndabaX Culture"
            className="w-full h-64 object-cover rounded shadow"
          />
        </div>
      </section>

      {/* Benin Culture */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} py-12 px-6 max-w-6xl mx-auto rounded-lg mt-8`}>
        <h2 className="text-3xl font-semibold text-red-500 mb-6 flex items-center gap-2">
          <GlobeAltIcon className="h-6 w-6" /> A Glimpse of Benin's Culture
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Benin Culture"
            className="w-full h-64 object-cover rounded shadow"
          />
          <div>
            <p className="leading-relaxed">
              Benin Republic is rich in traditions, arts, and values. From the rhythmic
              beats of drums to the vibrant fabrics of local artisans...
            </p>
            <p className="mt-4">
              We embrace our identity while building Africa’s tech future.
            </p>
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 mb-6 flex items-center gap-2">
          {/* <PhotographIcon className="h-6 w-6" /> */}
           🎨 Traditions & Lifestyle
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Customs:</strong> Voodoo rituals, royal festivals</li>
              <li><strong>Music:</strong> Percussion-driven rhythms</li>
              <li><strong>Dress:</strong> Wax prints, Agbada robes</li>
              <li><strong>Food:</strong> Akassa, egusi soup</li>
            </ul>
          </div>
          <img
            src="https://via.placeholder.com/400x250"
            alt="Traditional Dress and Food"
            className="w-full h-64 object-cover rounded shadow"
          />
        </div>
      </section>

      {/* Multimedia */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} py-12 px-6 max-w-6xl mx-auto rounded-lg`}>
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 text-center flex justify-center items-center gap-2">
          <FilmIcon className="h-6 w-6" /> 📽️ Culture in Motion
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded overflow-hidden shadow">
            <video controls className="w-full h-64 object-cover">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mt-2 text-sm">Placeholder Cultural Video</p>
          </div>
          <div className="rounded overflow-hidden shadow">
            <audio controls className="w-full mt-4">
              <source src="/assets/benin-music.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-center mt-4 text-sm">Folk Percussion Sample</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-10 text-center">📜 Cultural Timeline</h2>
        <div className="space-y-8 border-l-4 border-green-500 pl-6">
          <div>
            <h3 className="font-bold text-lg text-green-600">1600s – Dahomey Kingdom</h3>
            <p>Known for female warriors and strong governance.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-yellow-500">1800s – Cultural Resistance</h3>
            <p>Colonization didn’t erase the Vodun heritage.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-red-500">1960 – Independence</h3>
            <p>New era of cultural expression begins.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-green-600">Today – Tech meets Tradition</h3>
            <p>Innovators merge AI with cultural knowledge.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">📸 Cultural Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(4).fill().map((_, i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/200x200?text=Photo+${i + 1}`}
              alt={`Placeholder ${i + 1}`}
              className="rounded shadow object-cover h-40 w-full"
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Culture of Change</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Be part of a community that blends innovation with identity.
        </p>
        <a
          href="/register"
          className="bg-white text-green-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Become a Member
        </a>
      </section>
    </div>
  );
};

export default culture;
