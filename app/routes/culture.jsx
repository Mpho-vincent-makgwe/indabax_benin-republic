import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/home/SectionHeader';
import ParagraphText from '../components/home/ParagraphText';

// Remix Icons (using react-icons/ri)
import { 
  RiSparkling2Line, 
  RiGlobalLine, 
  RiMovie2Line,
  RiCalendarLine,
  RiMusic2Line,
  RiImageLine,
  RiArrowRightLine
} from 'react-icons/ri';

const Culture = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation();

  const isDark = theme === 'dark';

  if(!ready){
    return <h1>translating</h1>
  }

  // Get array data safely
  const indabaXPoints = t('culture.indabaX.points', { returnObjects: true });
  const traditionItems = t('culture.traditions.items', { returnObjects: true });
  const timelineEvents = t('culture.timeline.events', { returnObjects: true });

  // Real image URLs (replace with your actual image URLs)
  const images = {
    banner: 'https://images.unsplash.com/photo-1545566234-59bdd6f92fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    indaba: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benin: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    traditions: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1545566234-59bdd6f92fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    ]
  };

  return (
    <div className={`${isDark ? 'bg-black text-gray-200' : 'bg-white text-gray-800'} min-h-screen transition-colors`}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center overflow-hidden">
        <img
          src={images.banner}
          alt="Benin Cultural Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('culture.title')}
          </h1>
          <ParagraphText 
            text={t('culture.subtitle')} 
            theme={theme} 
            textColor="text-gray-100"
            className="max-w-3xl mx-auto text-lg"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* IndabaX Culture */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.indabaX.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
              <ParagraphText text={t('culture.indabaX.description')} theme={theme} />
              <ul className="mt-6 space-y-3">
                {indabaXPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <RiSparkling2Line className="text-orange-500 text-xl flex-shrink-0 mt-1 mr-2" />
                    <ParagraphText text={point} theme={theme} />
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={images.indaba}
              alt="IndabaX Culture"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Benin Culture */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.benin.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={images.benin}
              alt="Benin Culture"
              className="w-full h-auto rounded-lg shadow-xl order-last md:order-first"
            />
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
              <ParagraphText text={t('culture.benin.description1')} theme={theme} />
              <ParagraphText 
                text={t('culture.benin.description2')} 
                theme={theme} 
                className="mt-4"
              />
            </div>
          </div>
        </section>

        {/* Traditions */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.traditions.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
              <ul className="space-y-4">
                {traditionItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <RiGlobalLine className="text-orange-500 text-xl flex-shrink-0 mt-1 mr-2" />
                    <div>
                      <strong className={`${isDark ? 'text-green-400' : 'text-green-700'}`}>{item.label}:</strong>
                      <ParagraphText text={` ${item.value}`} theme={theme} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={images.traditions}
              alt="Traditional Dress and Food"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Multimedia */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.multimedia.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
              <div className="p-4 flex items-center">
                <RiMovie2Line className="text-orange-500 text-xl mr-2" />
                <h3 className="text-lg font-semibold">{t('culture.multimedia.videoLabel')}</h3>
              </div>
              <video controls className="w-full h-64 object-cover">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
              <div className="p-4 flex items-center">
                <RiMusic2Line className="text-orange-500 text-xl mr-2" />
                <h3 className="text-lg font-semibold">{t('culture.multimedia.audioLabel')}</h3>
              </div>
              <div className="p-6">
                <audio controls className="w-full">
                  <source src="/assets/benin-music.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.timeline.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className={`relative pl-8 ${isDark ? 'border-green-900' : 'border-green-700'}`}>
            <div className={`absolute left-0 top-0 h-full w-1 ${isDark ? 'bg-green-900' : 'bg-green-700'}`} />
            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-10 pl-6 relative ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`absolute -left-2 top-2 h-4 w-4 rounded-full ${isDark ? 'bg-orange-500' : 'bg-orange-400'}`} />
                <div className="flex items-center mb-2">
                  <RiCalendarLine className={`text-orange-500 text-xl mr-2`} />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>{event.era}</h3>
                </div>
                <ParagraphText text={event.description} theme={theme} />
              </div>
            ))}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-20">
          <SectionHeader 
            title={t('culture.gallery.title')}
            theme={theme}
            underlineColor="bg-green-900"
            textColor={isDark ? "text-white" : "text-green-900"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images.gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-lg ${isDark ? 'bg-gray-900 border border-gray-700 shadow-lg shadow-white/10' : 'bg-gray-50 shadow-md'}`}>
                <div className="relative group">
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <RiImageLine className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-900 text-white py-12 px-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('culture.cta.title')}
          </h2>
          <ParagraphText 
            text={t('culture.cta.description')} 
            theme={theme} 
            textColor="text-gray-100"
            className="max-w-2xl mx-auto text-lg mb-8"
          />
          <a
            href="/register"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold rounded-full transition-colors duration-300"
          >
            {t('culture.cta.button')}
            <RiArrowRightLine className="ml-2" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Culture;