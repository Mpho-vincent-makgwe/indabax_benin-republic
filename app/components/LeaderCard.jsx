import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LeaderCard = ({ leader }) => {
  const { t, ready } = useTranslation()
  
  if (!ready) return <div>Loading...</div>

  return (
    <Link to={`/leaders/${leader.id}`} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative pb-[120%] bg-gray-100">
        <img 
          src={leader.image} 
          className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          alt={t(`leaders.${leader.id}.name`)}
        />
      </div>
      <div className="p-4 text-center border-t-4 border-primary">
        <h3 className="text-lg font-bold mb-1">{t(`leaders.${leader.id}.name`)}</h3>
        <p className="text-sm text-gray-600 font-medium">{t(`leaders.${leader.id}.role`)}</p>
      </div>
    </Link>
  )
}

export default LeaderCard