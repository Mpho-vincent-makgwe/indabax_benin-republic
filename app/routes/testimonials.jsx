// @ts-nocheck
import React, { useState } from 'react';
import Testimonials from '../components/Testimonials';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const TestimonialsPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
    profession: '',
    location: '',
    eventAttended: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Testimonial submitted:', formData);
    setIsFormOpen(false);
    // Reset form
    setFormData({
      name: '',
      feedback: '',
      profession: '',
      location: '',
      eventAttended: ''
    });
    alert(t('testimonialsPage.submitSuccess'));
  };

  return (
    <div className="relative">
      <Testimonials />
      
      {/* Add Testimonial Button */}
      <div className="fixed bottom-8 right-8 z-10">
        <button
          onClick={() => setIsFormOpen(true)}
          className={`p-4 rounded-full shadow-lg ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
          aria-label={t('testimonialsPage.addTestimonial')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
          <div className={`relative max-w-2xl w-full rounded-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <button
              onClick={() => setIsFormOpen(false)}
              className={`absolute top-4 right-4 p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              aria-label={t('common.close')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              {t('testimonialsPage.form.title')}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('testimonialsPage.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  />
                </div>

                <div>
                  <label htmlFor="feedback" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('testimonialsPage.form.feedback')}
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="profession" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('testimonialsPage.form.profession')}
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  />
                </div>

                <div>
                  <label htmlFor="location" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('testimonialsPage.form.location')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  />
                </div>

                <div>
                  <label htmlFor="eventAttended" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('testimonialsPage.form.eventAttended')}
                  </label>
                  <select
                    id="eventAttended"
                    name="eventAttended"
                    value={formData.eventAttended}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  >
                    <option value="">{t('testimonialsPage.form.selectEvent')}</option>
                    <option value="indaba2024">IndabaX Benin 2024</option>
                    <option value="aiYouthBenin">AI Youth Camp - Benin</option>
                    <option value="futureTechAfrica">FutureTech Africa 2025</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
                >
                  {t('testimonialsPage.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;