import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const faqs = t('faq.questions', { returnObjects: true });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 to-yellow-50'} text-center`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('faq.title')}
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('faq.subtitle')}
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            >
              <div className={`p-6 cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold flex items-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <span className="mr-3">{index + 1}.</span>
                  {faq.q}
                </h3>
                <div className="mt-4">
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className={`mt-16 p-8 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-green-700'}`}>
            {t('faq.stillHaveQuestionsTitle')}
          </h2>
          <p className={`mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t('faq.stillHaveQuestionsDesc')}
          </p>
          <a
            href="mailto:contact@indabax-benin.org"
            className={`inline-block px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-colors duration-300`}
          >
            {t('faq.contactUs')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
