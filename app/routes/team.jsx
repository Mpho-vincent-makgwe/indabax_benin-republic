import React from 'react';
import { Link } from 'react-router-dom';
import LeaderCard from '../components/LeaderCard';
import SpeakerCard from '../components/SpeakerCard';
import OrganizersCard from '../components/OrganizersCard';
import { leaders, speakers, organisers } from '../BackEnd/data';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t('team.title')}</h1>
      
      {/* Leaders Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('team.leadership')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <Link 
              key={leader.id} 
              to={`/leaders/${leader.id}`}
              className="block"
            >
              <LeaderCard leader={leader} />
            </Link>
          ))}
        </div>
      </section>
      
      {/* Organizers Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('team.organizers')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organisers.map((organizer) => (
            <Link 
              key={organizer.id} 
              to={`/organizers/${organizer.id}`}
              className="block"
            >
              <OrganizersCard organizer={organizer} />
            </Link>
          ))}
        </div>
      </section>
      
      {/* Speakers Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('team.featuredSpeakers')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.slice(0, 4).map((speaker) => (
            <Link 
              key={speaker.id} 
              to={`/speakers/${speaker.id}`}
              className="block"
            >
              <SpeakerCard spk={speaker} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;