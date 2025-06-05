import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SparklesIcon, FilmIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Culture = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation();

  const isDark = theme === 'dark';

if(!ready){
  return(
    <h1>translating</h1>
  )
}
  // Get array data safely
  const indabaXPoints = t('culture.indabaX.points', { returnObjects: true });
  const traditionItems = t('culture.traditions.items', { returnObjects: true }) ;
  const timelineEvents = t('culture.timeline.events', { returnObjects: true }) ;

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
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            {t('culture.title')}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-white">
            {t('culture.subtitle')}
          </p>
        </div>
      </section>

      {/* IndabaX Culture */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 flex items-center gap-2">
          <SparklesIcon className="h-6 w-6" /> {t('culture.indabaX.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="leading-relaxed">
              {t('culture.indabaX.description')}
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1">
              {indabaXPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
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
          <GlobeAltIcon className="h-6 w-6" /> {t('culture.benin.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Benin Culture"
            className="w-full h-64 object-cover rounded shadow"
          />
          <div>
            <p className="leading-relaxed">
              {t('culture.benin.description1')}
            </p>
            <p className="mt-4">
              {t('culture.benin.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 mb-6 flex items-center gap-2">
          {t('culture.traditions.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ul className="list-disc ml-5 space-y-2">
              {traditionItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
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
          <FilmIcon className="h-6 w-6" /> {t('culture.multimedia.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded overflow-hidden shadow">
            <video controls className="w-full h-64 object-cover">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mt-2 text-sm">{t('culture.multimedia.videoLabel')}</p>
          </div>
          <div className="rounded overflow-hidden shadow">
            <audio controls className="w-full mt-4">
              <source src="/assets/benin-music.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-center mt-4 text-sm">{t('culture.multimedia.audioLabel')}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-10 text-center">
          {t('culture.timeline.title')}
        </h2>
        <div className="space-y-8 border-l-4 border-green-500 pl-6">
          {timelineEvents.map((event, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg text-green-600">{event.era}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">
          {t('culture.gallery.title')}
        </h2>
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
        <h2 className="text-3xl font-bold text-white mb-4">
          {t('culture.cta.title')}
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          {t('culture.cta.description')}
        </p>
        <a
          href="/register"
          className="bg-white text-green-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          {t('culture.cta.button')}
        </a>
      </section>
    </div>
  );
};

export default Culture;