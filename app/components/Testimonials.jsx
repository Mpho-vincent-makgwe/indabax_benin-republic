import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { testimonials } from '../BackEnd/data'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const Testimonials = () => {
  const location = useLocation()
  const { theme } = useTheme()
  const { t, i18n, ready } = useTranslation()
  const isTestimonialsPage = location.pathname === '/testimonials'

  if (!ready) return <div>Loading...</div>

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-green-500"></div>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
             <div className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${theme === 'dark' ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'}`}>
              {t(`events.${testimonial.eventAttended}.title`) !== `events.${testimonial.eventAttended}.title` 
                ? t(`events.${testimonial.eventAttended}.title`)
                : t(`pastEvents.${testimonial.eventAttended}.title`) !== `pastEvents.${testimonial.eventAttended}.title`
                  ? t(`pastEvents.${testimonial.eventAttended}.title`)
                  : testimonial.eventAttended
              }
            </div>
                          
              <div className={`h-14 w-14 rounded-full mb-6 flex items-center justify-center text-xl font-bold ${theme === 'dark' ? 'bg-gradient-to-br from-green-600 to-gray-800' : 'bg-gradient-to-br from-green-400 to-gray-200'} text-white`}>
                {testimonial.name.charAt(0)}
              </div>
              
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                "{t(`testimonials.${testimonial.id}.feedback`)}"
              </p>
              
              <div className="border-t pt-4" style={{ borderColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 1)' }}>
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t(`testimonials.${testimonial.id}.name`)}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t(`testimonials.${testimonial.id}.profession`)}
                </p>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  <svg className="inline mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {t(`testimonials.${testimonial.id}.location`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isTestimonialsPage && (
          <div className="text-center mt-16">
            <Link 
              to="/testimonials" 
              className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'} transition-colors duration-300 shadow-md hover:shadow-lg`}
            >
              {t('testimonials.readMore')}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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