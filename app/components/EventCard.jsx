import React from 'react'
import { useTheme } from '../context/ThemeContext'

const EventCard = ({event, timers}) => {
  const { theme } = useTheme()
  
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} >
      {/* Image with gradient overlay */}
      <div className="relative pb-[56.25%] bg-gray-200">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/60' : 'from-black/40'} to-transparent`} />
        
        {/* Date badge */}
        <div className={`absolute top-2 left-2 ${theme === 'dark' ? 'bg-gray-700/90' : 'bg-white/90'} backdrop-blur-sm rounded-md px-2 py-1 text-center`}>
          <p className={`text-xs font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
            {event.date.toLocaleString('default', { day: 'numeric' })}
          </p>
          <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {event.date.toLocaleString('default', { month: 'short' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className={`text-sm font-bold line-clamp-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
            {event.title}
          </h3>
          <span className={`${theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2`}>
            {event.location}
          </span>
        </div>

        {/* Timer with progress bar */}
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
            {timers[event.id]?.days}d {timers[event.id]?.hours}h {timers[event.id]?.minutes}m left
          </p>
        </div>

        {/* Action button */}
        <button className={`mt-3 w-full py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-md transition-colors duration-200 ${theme === 'dark' ? 'hover:bg-green-700' : ''}`}>
          Register Now
        </button>
      </div>
    </div>
  )
}

export default EventCard