import React from 'react';
import { Link } from 'react-router-dom';
import { pastEvents, events } from '../BackEnd/data';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const CommunityEvents = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleString(i18n.language, { day: 'numeric' }),
      month: date.toLocaleString(i18n.language, { month: 'short' })
    };
  };

  const EventCard = ({ event, isPast = false }) => {
    const eventType = isPast ? 'pastEvents' : 'events';
    const formattedDate = formatDate(event.date);
    
    return (
      <div className={`h-full flex flex-col rounded-xl overflow-hidden 
        ${theme === 'dark' ? 
          'bg-black border-1 border-white shadow-lg shadow-white/20' : 
          'bg-white shadow-lg'
        }`}
      >
        {/* Futuristic corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-16 h-16 bg-yellow-400/20 transform rotate-45 origin-center" />
        </div>
        
        {/* Image section */}
        <div className="relative pb-[56.25%] bg-gradient-to-br from-green-500/10 to-gray-200">
          <img 
            src={event.image} 
            alt={t(`${eventType}.${event.id}.title`)} 
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/70 via-black/30' : 'from-black/50 via-black/10'} to-transparent`} />
          
          {/* Date badge */}
          <div className={`absolute top-3 left-3 ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg px-3 py-2 text-center border ${theme === 'dark' ? 'border-green-400/30' : 'border-green-600/30'} shadow-md`}>
            <p className={`text-sm font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              {formattedDate.day}
            </p>
            <p className={`text-xs ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
              {formattedDate.month.toUpperCase()}
            </p>
          </div>

          {/* Past/Upcoming badge */}
          <div className="absolute bottom-3 left-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
              {isPast ? t('communityEvents.past') : t('communityEvents.upcoming')}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-5 flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className={`text-lg font-bold line-clamp-2 leading-tight ${theme === 'dark' ? 'text-green-100' : 'text-gray-800'}`}>
              {t(`${eventType}.${event.id}.title`)}
            </h3>
            <span className={`${theme === 'dark' ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-800'} text-xs px-2.5 py-1 rounded-full whitespace-nowrap ml-2 border ${theme === 'dark' ? 'border-green-400/20' : 'border-green-600/20'}`}>
              {t(`${eventType}.${event.id}.location`)}
            </span>
          </div>

          {/* Highlight section */}
          <div className={`mt-3 mb-5 px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-green-50'} border ${theme === 'dark' ? 'border-green-400/20' : 'border-green-600/20'}`}>
            <p className={`text-xs ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
              <span className="font-semibold">{t('communityEvents.highlight')}:</span> {t(`${eventType}.${event.id}.highlight`)}
            </p>
          </div>

          {/* Register button */}
          <div className="px-2 pb-2">
            <Link 
              to={`/events/${event.id}`} 
              className={`w-full py-3 flex items-center justify-center rounded-lg
                ${theme === 'dark' ? 
                  'bg-white/90 hover:bg-white text-gray-900 shadow-[0_0_0_1px_rgba(255,255,255,0.2)]' : 
                  'bg-black hover:bg-gray-900 text-white'
                } 
                text-sm font-semibold transition-all duration-300 relative overflow-hidden group`}
            >
              <span className="relative z-10 flex items-center">
                {t('communityEvents.viewDetails')}
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className={`absolute inset-0 bg-gradient-to-r ${
                theme === 'dark' ? 
                  'from-yellow-400/10 to-transparent' : 
                  'from-yellow-400/20 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 mx-auto ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Hero Section with full-width background */}
      <div className={`relative w-screen left-1/2 -translate-x-1/2 mb-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-green-50'}`}>
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 h-full">
          <img 
            src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2671&auto=format&fit=crop" 
            alt="Community events background"
            className="w-full h-full object-cover min-h-[400px]"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'dark' ? 'from-gray-900/90 via-gray-900/70 to-gray-900/20' : 'from-green-50/90 via-green-50/70 to-green-50/20'}`} />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-xl">
            {/* Title with accent */}
            <div className="mb-6">
              <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                {t('communityEvents.title')}
                <span className="block w-16 h-1.5 mt-4 rounded-full bg-gradient-to-r from-yellow-400 to-green-500"></span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className={`text-xl mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('communityEvents.subtitle')}
            </p>
            
            {/* CTA Button with hover effect */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className={`px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 border-2
                  ${theme === 'dark' ? 
                    'border-green-400 text-green-400 hover:bg-green-400/10' : 
                    'border-green-600 text-green-600 hover:bg-green-600/10'
                  }`}
              >
                {t('communityEvents.learnMore')}
              </Link>
            </div>
            
            {/* Stats or additional info */}
            <div className={`mt-12 flex flex-wrap gap-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{t('communityEvents.upcomingEvents', { count: events.length })}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{t('communityEvents.pastEvents', { count: pastEvents.length })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
        {/* Events Section */}
        <section>
          <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('communityEvents.events')}
          </h2>
          
          {events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('communityEvents.noEvents')}
              </p>
            </div>
          )}

          {pastEvents.length > 0 && (
            <>
              <h2 className={`text-3xl font-bold mt-16 mb-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                {t('communityEvents.pastEvents')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} isPast={true} />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default CommunityEvents;