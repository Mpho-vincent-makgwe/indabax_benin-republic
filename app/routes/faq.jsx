import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const faqs = t('faq.questions', { returnObjects: true });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section - Enhanced Banner for Both Modes */}
      <div className={`relative py-32 overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        {/* Decorative elements - now for both modes */}
        <div className={`absolute top-0 left-0 w-full h-full opacity-20 ${theme === 'dark' ? 'bg-gradient-to-br from-green-900 via-transparent to-purple-900' : 'bg-gradient-to-br from-green-100 via-transparent to-yellow-100'}`}></div>
        <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full ${theme === 'dark' ? 'bg-green-600 opacity-10' : 'bg-green-300 opacity-20'} blur-3xl`}></div>
        <div className={`absolute top-0 left-0 w-64 h-64 rounded-full ${theme === 'dark' ? 'bg-purple-600 opacity-10' : 'bg-yellow-300 opacity-20'} blur-3xl`}></div>
        
        {/* Subtle grid pattern for light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        )}

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('faq.title')}
          </h1>
          <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            {t('faq.subtitle')}
          </p>
          <div className="mt-8">
            <div className={`inline-block h-1.5 w-24 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-gradient-to-r from-green-500 to-yellow-400'}`}></div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-black border border-gray-700 shadow-lg shadow-white/5' : 'bg-white border border-gray-100 shadow-md hover:shadow-lg'}`}
            >
              <div className={`p-6 cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}`}>
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
        <div className={`mt-16 p-8 rounded-xl text-center ${theme === 'dark' ? 'bg-black border border-gray-700 shadow-lg shadow-white/5' : 'bg-white border border-gray-100 shadow-md'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-green-700'}`}>
            {t('faq.stillHaveQuestionsTitle')}
          </h2>
          <p className={`mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t('faq.stillHaveQuestionsDesc')}
          </p>
          <a
            href="mailto:contact@indabax-benin.org"
            className={`inline-block px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/20' : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md shadow-green-500/30'} transition-all duration-300`}
          >
            {t('faq.contactUs')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;