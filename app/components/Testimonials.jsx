import React, { useState, useEffect } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')

  if (!ready) return <div className="text-center py-12">Loading...</div>

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToNext = () => {
    setDirection('right')
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrev = () => {
    setDirection('left')
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToIndex = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  // Get visible testimonials (current, previous, next)
  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[currentIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' }
    ]
  }

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

  const carouselItem = {
    left: {
      x: '-150%',
      opacity: 0.6,
      scale: 0.9,
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    center: {
      x: '-50%',
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: { duration: 0.5 }
    },
    right: {
      x: '50%',
      opacity: 0.6,
      scale: 0.9,
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
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
      className={`py-8 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          variants={item}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-green-500 rounded-full"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel container */}
          <div className="relative h-[380px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial="hidden"
                  animate={testimonial.position}
                  variants={carouselItem}
                  className={`absolute w-full max-w-md ${
                    theme === 'dark' 
                      ? 'bg-black border-1 border-white shadow-lg shadow-white/20' 
                      : 'bg-white border border-gray-200 shadow-lg'
                  } rounded-xl`}
                  style={{
                    left: '50%',
                    transformOrigin: 'center center',
                  }}
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
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button 
              onClick={goToPrev}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-green-500 hover:text-white transition-colors`}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? theme === 'dark' ? 'bg-white' : 'bg-black'
                      : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-green-500 hover:text-white transition-colors`}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {!isTestimonialsPage && (
          <motion.div 
            className="text-center mt-8"
            variants={item}
          >
            <SectionLink to="/testimonials" theme={theme} text={t(`testimonials.readMore`)}/>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Testimonials