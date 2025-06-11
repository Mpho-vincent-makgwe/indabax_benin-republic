import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { testimonials } from '../BackEnd/data'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import SectionLink from './home/SectionLink'

const Testimonials = () => {
  const location = useLocation()
  const { theme } = useTheme()
  const { t, ready } = useTranslation()
  const isTestimonialsPage = location.pathname === '/testimonials'

  if (!ready) return <div className="text-center py-12">Loading...</div>

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return <div className="flex">{stars}</div>
  }

  return (
    <motion.section 
      className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-green-500 rounded-full"></div>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`h-14 w-14 rounded-full mr-4 flex items-center justify-center text-2xl font-bold ${theme === 'dark' ? 'bg-green-600' : 'bg-green-500'} text-white`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {t(`testimonials.${testimonial.id}.name`)}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t(`testimonials.${testimonial.id}.profession`)}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={testimonial.rating || 5} />
                </div>

                <blockquote className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="italic">"{t(`testimonials.${testimonial.id}.feedback`)}"</p>
                </blockquote>

                <div className="flex justify-between items-center">
                  <p className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                    <svg className="inline mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {t(`testimonials.${testimonial.id}.location`)}
                  </p>
                  <span className={`text-xs px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'}`}>
                    {t(`events.${testimonial.eventAttended}.title`) !== `events.${testimonial.eventAttended}.title` 
                      ? t(`events.${testimonial.eventAttended}.title`)
                      : t(`pastEvents.${testimonial.eventAttended}.title`) !== `pastEvents.${testimonial.eventAttended}.title`
                        ? t(`pastEvents.${testimonial.eventAttended}.title`)
                        : testimonial.eventAttended
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isTestimonialsPage && (
          <motion.div 
            className="text-center mt-16"
            variants={item}
          >
            {/* <Link 
              to="/testimonials" 
              className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-medium ${theme === 'dark' ? 'bg-gray-100 hover:bg-green-700 text-white' : 'bg-gray/50 hover:bg-green-600 text-white'} transition-colors duration-300 shadow-lg hover:shadow-xl`}
            >
              {t('testimonials.readMore')}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link> */}
            <SectionLink to="/testimonials" theme={theme} text={t(`testimonials.readMore`)}/>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Testimonials