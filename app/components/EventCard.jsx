import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
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
    <div className={`group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative pb-[56.25%] bg-gray-200">
        <img 
          src={event.image} 
          alt={t(`events.${event.id}.title`)} 
          className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/60' : 'from-black/40'} to-transparent`} />
        
        <div className={`absolute top-2 left-2 ${theme === 'dark' ? 'bg-gray-700/90' : 'bg-white/90'} backdrop-blur-sm rounded-md px-2 py-1 text-center`}>
          <p className={`text-xs font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
            {formattedDate.day}
          </p>
          <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {formattedDate.month}
          </p>
        </div>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className={`text-sm font-bold line-clamp-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
            {t(`events.${event.id}.title`)}
          </h3>
          <span className={`${theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2`}>
            {t(`events.${event.id}.location`)}
          </span>
        </div>

        <div className="mt-2">
          <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1 mb-1.5`}>
            <div 
              className="bg-green-500 h-1 rounded-full" 
              style={{ 
                width: `${Math.min(
                  100, 
                  ((timers[event.id]?.totalSeconds || 0) / 
                  (event.duration * 3600)) * 100
                )}%` 
              }}
            />
          </div>
          <p className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {timers[event.id]?.days} {t('common.days')} {timers[event.id]?.hours} {t('common.hours')} {timers[event.id]?.minutes} {t('common.minutes')} {t('common.left')}
          </p>
        </div>

        <Link 
          to={`/events/${event.id}`} 
          className={`mt-3 w-full py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-md transition-colors duration-200 ${theme === 'dark' ? 'hover:bg-green-700' : ''}`}
        >
          {t('common.registerNow')}
        </Link>
      </div>
    </div>
  )
}

export default EventCard