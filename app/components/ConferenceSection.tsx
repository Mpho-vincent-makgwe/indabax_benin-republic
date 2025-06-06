import React from 'react';
import { 
  FaCheckCircle, 
  FaUsers, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaGraduationCap,
  FaBrain
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const ConferenceSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Features data
  const conferenceFeatures = [
    'conference.features.technicalWorkshops',
    'conference.features.inspiringKeynotes',
    'conference.features.networkingSessions',
    'conference.features.communityPanels',
    'conference.features.researchShowcases',
  ];

  // Benefits data
  const benefits = [
    { 
      icon: <FaUsers className="text-xl" />,
      titleKey: 'conference.benefitTitles.0',
      descKey: 'conference.benefits.networking'
    },
    { 
      icon: <FaGraduationCap className="text-xl" />,
      titleKey: 'conference.benefitTitles.1',
      descKey: 'conference.benefits.learning'
    },
    { 
      icon: <FaHandshake className="text-xl" />,
      titleKey: 'conference.benefitTitles.2',
      descKey: 'conference.benefits.career'
    },
    { 
      icon: <FaBrain className="text-xl" />,
      titleKey: 'conference.benefitTitles.3',
      descKey: 'conference.benefits.innovation'
    }
  ];

  const eventDetails = [
    { icon: <FaUsers className="text-xl" />, key: 'conference.details.attendees' },
    { icon: <FaCalendarAlt className="text-xl" />, key: 'conference.details.date' },
    { icon: <FaMapMarkerAlt className="text-xl" />, key: 'conference.details.location' },
    { icon: <FaLightbulb className="text-xl" />, key: 'conference.details.sessions' },
  ];

  return (
    <section className={`w-full py-16 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image and Main Info */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Left: Image with creative overlay */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/conference-main.jpg"
                alt={t('conference.mainImageAlt')}
                className="w-full h-auto object-cover aspect-video"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${
                theme === 'dark' ? 'from-gray-900/30 via-gray-900/70' : 'from-white/30 via-white/70'
              }`}></div>
              
              {/* Floating attendee count */}
              <div className={`absolute bottom-6 left-6 flex items-center gap-2 px-4 py-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
              } shadow-lg`}>
                <div className={`p-2 rounded-full ${
                  theme === 'dark' ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <FaRocket />
                </div>
                <span className="font-bold text-orange-500">2K+</span>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t('conference.details.titles.0')}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-12 h-0.5 ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`}></span>
              <p className={`text-sm uppercase font-semibold tracking-wider ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                {t('conference.aboutTitle')}
              </p>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('conference.heading')}
            </h2>
            
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('conference.description')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {eventDetails.map((detail, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  } border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700 text-green-400' : 'bg-white text-green-600 shadow-sm'
                  }`}>
                    {detail.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t(`conference.details.titles.${index}`)}
                    </p>
                    <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {t(detail.key)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className={`px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg shadow-green-900/30' 
                  : 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/30'
              }`}>
                {t('conference.registerButton')}
              </button>
              <button className={`px-8 py-3 rounded-full font-semibold transition-all ${
                theme === 'dark' 
                  ? 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white' 
                  : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900'
              }`}>
                {t('conference.venueButton')}
              </button>
            </div>
          </div>
        </div>

        {/* Why Attend Section - Integrated creatively */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('conference.whyAttendTitle')}
            </h2>
            <div className="flex justify-center">
              <div className={`w-24 h-1 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`}></div>
            </div>
          </div>

          {/* Benefits Grid with creative layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all hover:-translate-y-2 ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'
                } border ${
                  theme === 'dark' ? 'border-gray-700 hover:border-green-500/30' : 'border-gray-200 hover:border-green-500/30'
                } shadow-md hover:shadow-lg`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t(benefit.titleKey)}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {t(benefit.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List with Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image with creative elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/speaker.jpg"
                alt={t('conference.speakerAlt')}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                theme === 'dark' ? 'from-gray-900/80' : 'from-white/80'
              }`}></div>
              
            </div>
          </div>

          {/* Right: Features List */}
          <div className="lg:w-1/2">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('conference.eventHighlightTitle')}
            </h3>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('conference.eventHighlightText')}
            </p>

            <ul className="space-y-4">
              {conferenceFeatures.map((featureKey, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg mt-1 ${
                    theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
                  }`}>
                    <FaCheckCircle />
                  </div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t(featureKey)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;