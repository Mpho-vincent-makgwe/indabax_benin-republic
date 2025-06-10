import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const HighlightDahomey = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

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

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className={`max-w-7xl mx-auto px-6 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with enhanced animation */}
          <motion.div 
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-yellow-100/20'}`}></div>
            <img
              src="/assets/dahomey-woman.jpg"
              alt={t('dahomey.imageAlt')}
              className="absolute h-full w-full object-cover"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-gray-900/80 via-gray-900/20' : 'from-white/80 via-white/20'} to-transparent`}></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            
              
           <SectionHeader title={t('dahomey.title')} theme={theme} underlineColor={`green-600`}/>
            
            <motion.p 
              className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              variants={itemVariants}
            >
              {t('dahomey.description')}
            </motion.p>
            
            <motion.div 
              className={`p-6 rounded-xl border-l-4 ${theme === 'dark' ? 'bg-gray-700 border-green-500' : 'bg-green-50 border-green-600'}`}
              variants={itemVariants}
            >
              <p className={`italic ${theme === 'dark' ? 'text-green-300' : 'text-green-800'}`}>
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HighlightDahomey;