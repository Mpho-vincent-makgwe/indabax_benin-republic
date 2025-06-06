import React from 'react';
import { Link } from 'react-router-dom';
import { pastEvents, events, speakers, organisers } from '../BackEnd/data';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const CommunityEvents = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const getSpeakerDetails = (id) => speakers.find(s => s.id === id);
  const getOrganiserDetails = (id) => organisers.find(o => o.id === id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const EventCard = ({ event, isPast = false }) => {
    const eventType = isPast ? 'pastEvents' : 'events';
    return (
      <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={t(`${eventType}.${event.id}.title`)} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
              {isPast ? t('communityEvents.past') : t('communityEvents.upcoming')}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold line-clamp-2">{t(`${eventType}.${event.id}.title`)}</h3>
            <span className={`text-sm px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {formatDate(event.date)}
            </span>
          </div>
          
          <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <i className="fas fa-map-marker-alt mr-2"></i>
            {t(`${eventType}.${event.id}.location`)}
          </p>
          
          <p className="mb-4 line-clamp-3">{t(`${eventType}.${event.id}.description`)}</p>
          
          <div className="flex justify-between items-center mt-6">
            <Link 
              to={`/events/${event.id}`} 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-100 hover:bg-green-200 text-green-800'}`}
            >
              {t('communityEvents.viewDetails')}
            </Link>
            <span className="text-sm italic">
              {t('communityEvents.highlight')}: {t(`${eventType}.${event.id}.highlight`)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative rounded-2xl overflow-hidden mb-16 p-12 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-green-50 to-green-100'}`}>
        <div className="relative z-10 max-w-3xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('communityEvents.title')}
          </h1>
          <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('communityEvents.subtitle')}
          </p>
          <div className={`inline-block px-6 py-3 rounded-lg font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
            {t('communityEvents.cta')}
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2671&auto=format&fit=crop')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        {/* Upcoming Events */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
              {t('communityEvents.upcomingEvents')}
            </h2>
            <Link 
              to="/events/upcoming" 
              className={`text-sm font-medium ${theme === 'dark' ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}
            >
              {t('communityEvents.viewAll')} →
            </Link>
          </div>
          
          {events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('communityEvents.noUpcomingEvents')}
              </p>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
              {t('communityEvents.pastEvents')}
            </h2>
            <Link 
              to="/events/past" 
              className={`text-sm font-medium ${theme === 'dark' ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}
            >
              {t('communityEvents.viewAll')} →
            </Link>
          </div>
          
          {pastEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('communityEvents.noPastEvents')}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CommunityEvents;