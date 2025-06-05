import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const OrganizerCard = ({ organizer }) => {
  const { t, i18n, ready } = useTranslation()
  const { theme } = useTheme()
  
  // if (!ready) return <div>Loading...</div>

  return (
    <Link to={`/organizers/${organizer.id}`} passHref>
      <div className={`group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative pb-[100%] bg-gray-100">
          <img 
            src={organizer.image} 
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
            alt={t(`organizers.${organizer.id}.name`)}
          />
        </div>
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t(`organizers.${organizer.id}.name`)}
          </h3>
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t(`organizers.${organizer.id}.role`)}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {organizer.expertise?.map((skill, index) => (
              <span 
                key={index} 
                className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
              >
                {t(`skills.${skill}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrganizerCard