import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { testimonials } from '../BackEnd/data'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const Testimonials = () => {
  const location = useLocation()
  const { theme } = useTheme()
  const { t, i18n, ready } = useTranslation()
  const isTestimonialsPage = location.pathname === '/testimonials'
  const [activeIndex, setActiveIndex] = useState(null)

  if (!ready) return <div>Loading...</div>

  const toggleTestimonial = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-green-500"></div>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="space-y-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <button
                onClick={() => toggleTestimonial(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded-full mr-4 flex items-center justify-center text-lg font-bold ${theme === 'dark' ? 'bg-green-600' : 'bg-green-500'} text-white`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t(`testimonials.${testimonial.id}.name`)}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeIndex === index && (
                <div className={`px-6 pb-6 pt-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="mb-4 flex justify-between items-start">
                    <div>
                      <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t(`testimonials.${testimonial.id}.profession`)}
                      </p>
                      <p className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                        <svg className="inline mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {t(`testimonials.${testimonial.id}.location`)}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'}`}>
                      {t(`events.${testimonial.eventAttended}.title`) !== `events.${testimonial.eventAttended}.title` 
                        ? t(`events.${testimonial.eventAttended}.title`)
                        : t(`pastEvents.${testimonial.eventAttended}.title`) !== `pastEvents.${testimonial.eventAttended}.title`
                          ? t(`pastEvents.${testimonial.eventAttended}.title`)
                          : testimonial.eventAttended
                      }
                    </span>
                  </div>
                  
                  <blockquote className={`pl-4 border-l-2 ${theme === 'dark' ? 'border-green-500 text-gray-300' : 'border-green-400 text-gray-700'}`}>
                    <p className="italic">"{t(`testimonials.${testimonial.id}.feedback`)}"</p>
                  </blockquote>
                </div>
              )}
            </div>
          ))}
        </div>

        {!isTestimonialsPage && (
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className={`inline-flex items-center px-6 py-3 rounded-lg text-base font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'} transition-colors duration-300 shadow hover:shadow-md`}
            >
              {t('testimonials.readMore')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials