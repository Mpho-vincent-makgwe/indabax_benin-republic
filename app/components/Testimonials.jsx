import React from 'react'
import { Link } from 'react-router'
import { testimonials } from '../BackEnd/data'

const Testimonials = ({ theme }) => {

  return (
    <>
{/* Testimonials Section */}
<section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? '' : ''}`}>💬 Community Voices</h2>
      <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Hear what participants say about their IndabaX experience
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className={`relative p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} transform transition-all duration-300 hover:scale-[1.02]`}
        >
          {/* Decorative quote mark */}
          <div className={`absolute top-4 left-4 text-5xl ${theme === 'dark' ? 'text-gray-600' : 'text-gray-200'} font-serif`}>"</div>
          
          <p className={`relative z-10 text-lg italic mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            {testimonial.feedback}
          </p>
          
          <div className="flex items-center">
            <div className={`h-12 w-12 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center text-xl font-bold`}>
              {testimonial.name.charAt(0)}
            </div>
            <div className="ml-4">
              <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {testimonial.profession} • {testimonial.location}
              </p>
            </div>
          </div>
          
          {/* Event attended badge */}
          <div className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-600 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            IndabaX {testimonial.eventAttended.slice(-4)}
          </div>
        </div>
      ))}
    </div>

    {/* View all testimonials link */}
    <div className="text-center mt-12">
      <Link 
        to="/testimonials" 
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors duration-300`}
      >
        Read More Stories
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
</section>
    </>
  )
}

export default Testimonials