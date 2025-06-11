import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import MissionVisionSection from './MissionVisionSection';

const ConferenceSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const iconClasses = 'text-[22px] text-orange-500';

  const eventDetails = [
    { icon: <i className={`ri-group-line ${iconClasses}`} />, key: 'conference.details.attendees' },
    { icon: <i className={`ri-calendar-event-line ${iconClasses}`} />, key: 'conference.details.date' },
    { icon: <i className={`ri-map-pin-line ${iconClasses}`} />, key: 'conference.details.location' },
    { icon: <i className={`ri-lightbulb-line ${iconClasses}`} />, key: 'conference.details.sessions' },
  ];

  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:min-h-[620px]">
          {/* Left Side: Image + Mission/Vision */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[450px] md:h-[500px] w-full">
              <img
                src="/assets/aiconference.jpg"
                alt={t('conference.mainImageAlt')}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-gray-900/60 via-gray-900/30' : 'from-black/60 via-black/30'
                }`}
              />
              {/* Floating Badge */}
              <div
                className={`absolute bottom-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md ${
                  theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/70'
                } shadow-lg`}
              >
                <div
                  className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'
                  }`}
                >
                  <i className="ri-rocket-2-fill" />
                </div>
                <span className="font-bold text-orange-500">2K+</span>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t('conference.details.titles.0')}
                </span>
              </div>
            </div>

            {/* Mission/Vision Blurred Background */}
            <div className="w-full h-[120px] backdrop-blur-md  rounded-b-2xl overflow-hidden">
              <MissionVisionSection theme={theme} t={t} />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-between min-h-[620px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-12 h-0.5 ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`} />
                <p
                  className={`text-sm uppercase font-semibold tracking-wider ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  {t('conference.aboutTitle')}
                </p>
              </div>

              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('conference.heading')}
              </h2>

              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('conference.description')}
              </p>
            </div>

            {/* Event Detail Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {eventDetails.map((detail, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-orange-400'
                        : 'bg-white text-orange-500 shadow-sm'
                    }`}
                  >
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
          </div>
        </div>
          {/* Centered Buttons */}
          <div className="flex justify-center items-center pt-2 mt-2">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className={`px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg shadow-green-900/30'
                    : 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/30'
                }`}
              >
                {t('conference.registerButton')}
              </button>
              <button
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  theme === 'dark'
                    ? 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white'
                    : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900'
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
