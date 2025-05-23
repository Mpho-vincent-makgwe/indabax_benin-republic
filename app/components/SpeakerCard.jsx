// components/SpeakerCard.js
import React from 'react'
import { Link } from 'react-router'

const SpeakerCard = ({ spk }) => {
  return (
    <Link href={`/speakers/${spk.id}`} passHref>
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative pb-[80%] bg-gray-100">
          <img 
            src={spk.image} 
            className="absolute h-full w-full object-cover" 
            alt={spk.name}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{spk.name}</h3>
          <p className="text-sm text-gray-200">{spk.role}</p>
        </div>
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold">
          Speaker
        </div>
      </div>
    </Link>
  )
}

export default SpeakerCard