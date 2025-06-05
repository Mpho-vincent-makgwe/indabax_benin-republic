import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const ConferenceSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const conferenceFeatures = [
    'conference.features.technicalWorkshops',
    'conference.features.inspiringKeynotes',
    'conference.features.networkingSessions',
    'conference.features.communityPanels',
    'conference.features.researchShowcases',
  ];

  return (
    <section
      className={`w-full py-20 px-4 flex justify-center items-center transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-20 font-sans">
        
        {/* Left: Images */}
        <div className="relative flex-shrink-0 w-80 h-[420px]">
          <img
            src="/assets/speaker.jpg"
            alt={t('conference.speakerAlt')}
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
          <img
            src="/assets/audience.jpg"
            alt={t('conference.audienceAlt')}
            className="absolute top-1/2 -right-16 transform -translate-y-1/2 rounded-xl w-40 h-56 object-cover shadow-md"
          />
          <div className={`absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full shadow-md ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <img src="/assets/community6.jpg" alt={t('conference.attendeesAlt')} className="w-8 h-8 rounded-full" />
            <span className="text-orange-500 font-bold">2k</span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-sm text-orange-500 uppercase font-semibold mb-2">
            {t('conference.aboutTitle')}
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('conference.heading')}
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            {t('conference.description')}
          </p>

          <ul
            className={`grid grid-cols-2 gap-3 text-sm font-medium ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            } mb-6`}
          >
            {conferenceFeatures.map((featureKey:any,index)=> (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                {t(featureKey)}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300">
              {t('conference.registerButton')}
            </button>
            <button
              className={`border text-orange-500 px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                theme === 'dark'
                  ? 'border-orange-500 hover:bg-gray-800'
                  : 'border-orange-500 hover:bg-orange-100'
              }`}
            >
              {t('conference.venueButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;