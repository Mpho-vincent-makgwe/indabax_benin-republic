// components/OrganizerCard.js
import React from 'react'
import { Link } from 'react-router'

const OrganizerCard = ({ organizer }) => {
  return (
    <Link href={`/organizers/${organizer.id}`} passHref>
      <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative pb-[100%] bg-gray-100">
          <img 
            src={organizer.image} 
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
            alt={organizer.name}
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-bold mb-1">{organizer.name}</h3>
          <p className="text-sm text-gray-600 font-medium">{organizer.role}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {organizer.expertise?.map((skill, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrganizerCard