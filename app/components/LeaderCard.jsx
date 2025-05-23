// components/LeaderCard.js
import React from 'react'
import { Link } from 'react-router'

const LeaderCard = ({ leader }) => {
  return (
    <Link to={`/leaders/${leader.id}`} passHref>
      <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative pb-[120%] bg-gray-100">
          <img 
            src={leader.image} 
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
            alt={leader.name}
          />
        </div>
        <div className="p-4 text-center border-t-4 border-primary">
          <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
          <p className="text-sm text-gray-600 font-medium">{leader.role}</p>
        </div>
      </div>
    </Link>
  )
}

export default LeaderCard