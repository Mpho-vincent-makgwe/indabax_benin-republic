import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const SpeakerCard = ({ spk }) => {
  const { t, i18n, ready } = useTranslation()
  const { theme } = useTheme()
  
  if (!ready) return <div>Loading...</div>

  return (
    <Link to={`/speakers/${spk.id}`} passHref>
      <div className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative pb-[80%] bg-gray-100">
          <img 
            src={spk.image} 
            className="absolute h-full w-full object-cover" 
            alt={t(`speakers.${spk.id}.name`)}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{t(`speakers.${spk.id}.name`)}</h3>
          <p className="text-sm text-gray-200">{t(`speakers.${spk.id}.role`)}</p>
        </div>
        <div className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-semibold ${theme === 'dark' ? 'bg-gray-700/90 text-white' : 'bg-white/90 text-gray-900'}`}>
          {t('common.speaker')}
        </div>
      </div>
    </Link>
  )
}

export default SpeakerCard