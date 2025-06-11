import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const HighlightDahomey = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Pattern SVG for the text background
  const PatternSVG = () => (
    <svg 
      className="absolute inset-0 w-full h-full opacity-20" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern 
        id="pattern-123" 
        width="20" 
        height="20" 
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line 
          x1="0" 
          y1="0" 
          x2="0" 
          y2="20" 
          stroke={theme === 'dark' ? '#ffffff' : '#000000'} 
          strokeWidth="0.5"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern-123)" />
    </svg>
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/dahomey-woman.jpg"
          alt={t('dahomey.imageAlt')}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content container with pattern */}
      <motion.div 
        className="relative z-10 max-w-2xl px-8 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32 xl:px-24"
        variants={containerVariants}
      >
        <div className="relative">
          {/* Pattern overlay - only visible on text area */}
          <div className="absolute -left-8 -right-8 top-0 bottom-0 overflow-hidden">
            <PatternSVG />
          </div>
          
          {/* Content */}
          <div className="relative space-y-8">
            <motion.div variants={itemVariants}>
              <SectionHeader 
                title={t('dahomey.title')} 
                theme={theme} 
                underlineColor="green-600"
                textColor={theme === 'dark' ? 'text-white' : 'text-white'}
              />
            </motion.div>
            
            <motion.p 
              className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-100'}`}
              variants={itemVariants}
            >
              {t('dahomey.description')}
            </motion.p>
            
            <motion.div 
              className={`p-6 rounded-xl border-l-4 ${theme === 'dark' ? 'bg-black/40 border-green-500' : 'bg-white/20 border-green-600'}`}
              variants={itemVariants}
            >
              <p className={`italic ${theme === 'dark' ? 'text-green-300' : 'text-green-200'}`}>
                "{t('dahomey.quote')}"
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a
                href="/events/dahomey"
                className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {t('dahomey.cta')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HighlightDahomey;