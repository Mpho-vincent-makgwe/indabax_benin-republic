import React from 'react';
import { Link } from 'react-router';
import { pastEvents, events, speakers, organisers } from '../BackEnd/data';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const CommunityEvents = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const getSpeakerDetails = (id) => speakers.find(s => s.id === id);
  const getOrganiserDetails = (id) => organisers.find(o => o.id === id);

  // Format date based on current language
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className={`relative rounded-xl overflow-hidden mb-16 p-8 md:p-12 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-green-50 to-gray-100'}`}>
        <div className="relative z-10 max-w-2xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('communityEvents.title')}
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('communityEvents.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2670&auto=format')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Upcoming Events */}
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
              {t('communityEvents.upcomingEvents')}
            </h2>
            {events.map(event => (
              <div key={event.id} className={`p-5 mb-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={event.image} alt={t(`events.${event.id}.title`)} className="rounded-md w-full h-48 object-cover mb-3" />
                <h3 className="text-xl font-semibold mb-1">{t(`events.${event.id}.title`)}</h3>
                <p className="text-sm text-gray-500">
                  {t('communityEvents.locationDate', {
                    location: t(`events.${event.id}.location`),
                    date: formatDate(event.date)
                  })}
                </p>
                <p className="mt-2">{t(`events.${event.id}.description`)}</p>
                <p className="mt-2 font-medium italic">
                  {t('communityEvents.highlight')}: {t(`events.${event.id}.highlight`)}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold">{t('communityEvents.organisers')}:</h4>
                  <ul className="list-disc list-inside">
                    {event.organisers.map(id => {
                      const org = getOrganiserDetails(id);
                      return org && (
                        <li key={org.id}>
                          {t(`organizers.${org.id}.name`)} - {t(`organizers.roles.${org.role}`)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Past Events */}
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
              {t('communityEvents.pastEvents')}
            </h2>
            {pastEvents.map(event => (
              <div key={event.id} className={`p-5 mb-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={event.image} alt={t(`pastEvents.${event.id}.title`)} className="rounded-md w-full h-48 object-cover mb-3" />
                <h3 className="text-xl font-semibold mb-1">{t(`pastEvents.${event.id}.title`)}</h3>
                <p className="text-sm text-gray-500">
                  {t('communityEvents.locationDate', {
                    location: t(`pastEvents.${event.id}.location`),
                    date: formatDate(event.date)
                  })}
                </p>
                <p className="mt-2">{t(`pastEvents.${event.id}.description`)}</p>
                <p className="mt-2 font-medium italic">
                  {t('communityEvents.highlight')}: {t(`pastEvents.${event.id}.highlight`)}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold">{t('communityEvents.speakers')}:</h4>
                  <ul className="list-disc list-inside">
                    {event.speakers.map(id => {
                      const speaker = getSpeakerDetails(id);
                      return speaker && (
                        <li key={speaker.id}>
                          {t(`speakers.${speaker.id}.name`)} - {t(`speakers.${speaker.id}.role`)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">{t('communityEvents.organisers')}:</h4>
                  <ul className="list-disc list-inside">
                    {event.organisers.map(id => {
                      const org = getOrganiserDetails(id);
                      return org && (
                        <li key={org.id}>
                          {t(`organizers.${org.id}.name`)} - {t(`organizers.roles.${org.role}`)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;