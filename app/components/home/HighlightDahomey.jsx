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
      className="relative w-full h-[80vh] flex items-center justify-start overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background image with gradient overlay - static positioning */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/dahomey-woman.jpg"
          alt={t('dahomey.imageAlt')}
          className="w-full h-full object-cover static"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content container with pattern */}
      <motion.div 
        className="relative z-10 max-w-2xl px-8 py-16 md:px-12 lg:px-16 xl:px-24"
        variants={containerVariants}
      >
        <div className="relative">
          {/* Pattern overlay - only visible on text area */}
          <div className="absolute -left-8 -right-8 top-0 bottom-0 overflow-hidden">
            <PatternSVG />
          </div>
          
          {/* Content */}
          <div className="relative space-y-6">
            <motion.div variants={itemVariants} className="text-left">
              <SectionHeader 
                title={t('dahomey.title')} 
                theme={theme} 
                underlineColor="green-600"
                textColor={theme === 'dark' ? 'text-white' : 'text-white'}
                breakAfterWords={2}
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
            
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HighlightDahomey;