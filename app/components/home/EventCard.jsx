import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useTranslation } from 'react-i18next'

const EventCard = ({ event, timers }) => {
  const { theme } = useTheme()
  const { t, i18n, ready } = useTranslation()
  
  if (!ready) return <div>Loading...</div>

  // Format date according to current language
  const eventDate = event.date instanceof Date ? event.date : new Date(event.date);
  const formattedDate = {
    day: eventDate.toLocaleString(i18n.language, { day: 'numeric' }),
    month: eventDate.toLocaleString(i18n.language, { month: 'short' }),
  }

  return (
    <div className={`group relative overflow-hidden rounded-xl border border-transparent hover:border-green-400/30 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white'} backdrop-blur-sm shadow-lg hover:shadow-green-400/10`}>
      {/* Futuristic corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute -right-8 -top-8 w-16 h-16 bg-yellow-400/20 transform rotate-45 origin-center" />
      </div>
      
      <div className="relative pb-[56.25%] bg-gradient-to-br from-green-500/10 to-gray-200">
        <img 
          src={event.image} 
          alt={t(`events.${event.id}.title`)} 
          className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/70 via-black/30' : 'from-black/50 via-black/10'} to-transparent`} />
        
        {/* Date badge with futuristic design */}
        <div className={`absolute top-3 left-3 ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg px-3 py-2 text-center border ${theme === 'dark' ? 'border-green-400/30' : 'border-green-600/30'} shadow-md`}>
          <p className={`text-sm font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            {formattedDate.day}
          </p>
          <p className={`text-xs ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
            {formattedDate.month.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-md font-bold line-clamp-2 leading-tight ${theme === 'dark' ? 'text-green-100' : 'text-gray-800'}`}>
            {t(`events.${event.id}.title`)}
          </h3>
          <span className={`${theme === 'dark' ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-800'} text-xs px-2.5 py-1 rounded-full whitespace-nowrap ml-2 border ${theme === 'dark' ? 'border-green-400/20' : 'border-green-600/20'}`}>
            {t(`events.${event.id}.location`)}
          </span>
        </div>

        {/* Futuristic countdown display */}
        <div className={`mt-3 mb-4 px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-green-50'} border ${theme === 'dark' ? 'border-green-400/20' : 'border-green-600/20'}`}>
          <p className={`text-xs font-mono ${theme === 'dark' ? 'text-green-300' : 'text-green-700'} flex justify-between`}>
            <span>{timers[event.id]?.days} <span className="text-yellow-400">{t('common.days')}</span></span>
            <span>{timers[event.id]?.hours} <span className="text-yellow-400">{t('common.hours')}</span></span>
            <span>{timers[event.id]?.minutes} <span className="text-yellow-400">{t('common.minutes')}</span></span>
            <span className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{t('common.left')}</span>
          </p>
        </div>

        {/* Holographic-style button */}
        <Link 
          to={`/events/${event.id}`} 
          className={`mt-2 w-full py-2.5 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-400/30 relative overflow-hidden group`}
        >
          <span className="relative z-10 flex items-center">
            {t('common.registerNow')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </div>
  )
}

export default EventCard