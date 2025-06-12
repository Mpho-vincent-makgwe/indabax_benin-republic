import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { organisers } from '../BackEnd/data';
import { useTranslation } from 'react-i18next';

const OrganisersDetail = () => {
  const { organiserId } = useParams();
  const { theme } = useTheme();
  const { t } = useTranslation();

  const organiser = organisers.find(o =>
    o.id.toLowerCase() === organiserId?.toLowerCase()
  );

  if (!organiser) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('organizerDetail.notFound.title')}</h1>
          <p className="text-xl">{t('organizerDetail.notFound.message', { organiserId })}</p>
          <p className="text-lg mb-4">{t('organizerDetail.notFound.availableIds')}: {organisers.map(o => o.id).join(', ')}</p>
          <Link
            to="/"
            className={`mt-6 inline-block px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
          >
            {t('common.backToHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl ${theme === 'dark' ? 'bg-black border border-white shadow-lg shadow-white/10' : 'bg-white'}`}>
          <img src={organiser.image} alt={organiser.name} className="w-48 h-48 rounded-full shadow-lg border-4 border-green-500" />
          <div>
            <h1 className="text-3xl font-bold">{organiser.name}</h1>
            <p className="text-green-600 dark:text-green-300">{organiser.role}</p>
            <p className="mt-4">{organiser.bio}</p>
            <a href={organiser.contact} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
              {t('common.contactPrefix')} {organiser.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisersDetail;