import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import ConferenceSection from '../components/home/ConferenceSection';
import { events, leaders, speakers, testimonials, sponsors, organisers } from '../BackEnd/data';
import EventCard from '../components/home/EventCard';

import LeaderCard from '../components/LeaderCard';
import Testimonials from '../components/Testimonials';
import Loader from '../components/Loader/Loader';
import HeroSection from '../components/home/HeroSection';
import EventsSection from '../components/home/EventsSection';
import HighlightDahomey from '../components/home/HighlightDahomey';
import "./home.css";
// Utility function moved outside
const getCountdown = (date) => {
  const now = new Date().getTime();
  const eventTime = new Date(date).getTime();
  const diff = eventTime - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

// Marquee Component for Sponsors using HTML marquee tag
const SponsorMarquee = ({ tier, sponsors, theme }) => {
  const getSizeClass = () => {
    switch(tier) {
      case 'platinum': return 'w-64 h-32';
      case 'gold': return 'w-48 h-24';
      case 'silver': return 'w-36 h-18';
      case 'bronze': return 'w-32 h-16';
      default: return 'w-28 h-14';
    }
  };

  return (
    <marquee 
      behavior="scroll" 
      direction="left" 
      scrollamount="6"
      className="w-full py-4"
    >
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mx-8 transition-all duration-300 hover:scale-105 hover:opacity-100 flex items-center justify-center ${getSizeClass()}`}
        >
          <img 
            src={sponsor.logo} 
            alt={sponsor.name} 
            className="w-full h-full object-contain max-h-full max-w-full"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/300x150?text=${encodeURIComponent(sponsor.name)}`;
              e.currentTarget.className = "w-full h-full object-contain max-h-full max-w-full";
            }}
          />
        </a>
      ))}
    </marquee>
  );
};

// Leadership Section Component
const LeadershipSection = ({ theme, t }) => {
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('home.leaders.title')} 
          theme={theme} 
          underlineColor={theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leaders.slice(0, 4).map((leader) => (
            <div 
              key={leader.id} 
              className={`overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
                theme === 'dark' ? 'bg-black border-1 border-white shadow-lg shadow-white/20' 
                      : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <LeaderCard leader={leader} theme={theme} />
            </div>
          ))}
        </div>
        
        <SectionLink to="/team" theme={theme} text={t('home.leaders.viewTeam')} />
      </div>
    </section>
  );
};

// Organizers Section Component
const OrganizersSection = ({ theme, t, translatedOrganizers }) => {
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('organizers.title')} 
          theme={theme} 
          underlineColor={theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {translatedOrganizers.map((organizer) => (
            <OrganizerCard key={organizer.id} organizer={organizer} theme={theme} t={t} />
          ))}
        </div>
        
        <SectionLink to="/team" theme={theme} text={t('organizers.viewTeam')} />
      </div>
    </section>
  );
};

const OrganizerCard = ({ organizer, theme, t }) => (
  <div className={`overflow-hidden rounded-xl transition-transform hover:scale-105 ${
    theme === 'dark' ? 
      'bg-black border-1 border-white shadow-lg shadow-white/20' : 
      'bg-white border border-gray-200 shadow-lg'
  }`}>
    <div className="relative h-64 w-full overflow-hidden">
      <img 
        src={organizer.image} 
        alt={organizer.name}
        className="absolute h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/400x400?text=' + organizer.name.split(' ')[0];
        }}
      />
    </div>
    <div className={`p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        {organizer.name}
      </h3>
      <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {t(`organizers.roles.${organizer.role}`, { defaultValue: organizer.role })} • {t(`organizers.${organizer.id}.organization`, { defaultValue: organizer.organization })}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {organizer.expertise?.slice(0, 3).map((skill, index) => (
          <span 
            key={index} 
            className={`text-xs px-2 py-1 rounded ${
              theme === 'dark' ? 'bg-gray-900 text-green-300' : 'bg-green-100 text-green-800'
            }`}
          >
            {t(`organizers.expertise.${skill}`, { defaultValue: skill })}
          </span>
        ))}
      </div>
      <Link
        to={`/organizers/${organizer.id}`}
        className={`text-sm font-medium ${
          theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
        } transition-colors`}
      >
        {t('organizers.viewProfile')}
      </Link>
    </div>
  </div>
);
// Sponsors Section Component
const SponsorsSection = ({ theme, t, translatedSponsors }) => {
  const tierGroups = translatedSponsors.reduce((groups, sponsor) => {
    const tier = sponsor.tier || 'community';
    if (!groups[tier]) groups[tier] = [];
    groups[tier].push(sponsor);
    return groups;
  }, {});

  const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'institutional', 'community', 'media'];

  return (
    <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`} id="sponsors">
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full ${theme === 'dark' ? 'bg-green-900' : 'bg-green-100'}`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15,
              filter: 'blur(40px)',
              transform: `scale(${Math.random() * 2 + 0.5})`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('home.sponsors.title')} 
          theme={theme} 
          underlineColor={theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}
        />
        
        <p className={`text-center max-w-3xl mx-auto mb-16 text-lg ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {t('home.sponsors.subtitle')}
        </p>

        <div className="space-y-20">
          {tierOrder.filter(tier => tierGroups[tier]).map((tier) => (
            <div key={tier} className="text-center">
              
              <div className="sponsor-tier-container">
                <SponsorMarquee tier={tier} sponsors={tierGroups[tier]} theme={theme} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 p-8 rounded-2xl backdrop-blur-lg ${
          theme === 'dark' ? 'bg-black/50 border border-gray-800' : 'bg-black border border-gray-200'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className={`text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-50'
            }`}>
              {t('home.sponsors.becomeSponsor')}
            </h3>
            
            <p className={`mb-8 text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('home.sponsors.sponsorText')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sponsors@indabaxbenin.org"
                className={`px-8 py-3 rounded-full font-medium text-white ${
                  theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
                } transition-all hover:shadow-lg`}
              >
                {t('home.sponsors.contact')}
              </a>
              
              <Link
                to="/sponsors"
                className={`px-8 py-3 rounded-full font-medium ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                } transition-all hover:shadow-lg`}
              >
                {t('home.sponsors.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Section Header Component
const SectionHeader = ({ title, theme, underlineColor }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1 mx-auto ${underlineColor}`}></div>
  </div>
);

// Reusable Section Link Component
const SectionLink = ({ to, theme, text }) => (
  <div className="text-center">
    <Link 
      to={to} 
      className={`inline-block px-6 py-3 rounded-full font-medium ${
        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
      } transition-colors`}
    >
      {text}
    </Link>
  </div>
);

// Main Home Component
const Home = () => {
  const [timers, setTimers] = useState({});
  const [heroEvent, setHeroEvent] = useState(null);
  const [heroCountdown, setHeroCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { t, ready } = useTranslation();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  const translatedSponsors = sponsors.map(sponsor => ({
    ...sponsor,
    name: t(`home.sponsors.names.${sponsor.name}`, { defaultValue: sponsor.name })
  }));

  useEffect(() => {
    if (ready) {
      setLoading(false);
    }
    const upcoming = events
      .filter((e) => new Date(e.date) > new Date())
      .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

    setHeroEvent(upcoming);

    const updateCountdowns = () => {
      const newTimers = {};
      events.forEach((event) => {
        newTimers[event.id] = getCountdown(event.date);
      });
      setTimers(newTimers);
      if (upcoming) {
        setHeroCountdown(getCountdown(upcoming.date));
      }
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [ready, t]);

  if (loading) {
    return <div><Loader/></div>;
  }

  const latestEvent = events
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  const translatedOrganizers = organisers.map(organizer => ({
    ...organizer,
    role: t(`home.organizers.roles.${organizer.role}`, { defaultValue: organizer.role }),
    expertise: organizer.expertise?.map(skill => 
      t(`home.organizers.expertise.${skill}`, { defaultValue: skill })
    )
  }));

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'} transition duration-300`}>
      <HeroSection 
        heroEvent={heroEvent} 
        heroCountdown={heroCountdown} 
        t={t} 
        latestEvent={latestEvent} 
      />

      <ConferenceSection />

      <EventsSection events={events} timers={timers} theme={theme} t={t} />

      <HighlightDahomey />

      <LeadershipSection theme={theme} t={t} />

      <div className='items-center justify-center'>
        <Testimonials testimonials={testimonials} theme={theme} />
      </div>

      <OrganizersSection 
        theme={theme} 
        t={t} 
        translatedOrganizers={translatedOrganizers} 
      />

      <SponsorsSection 
        theme={theme} 
        t={t} 
        translatedSponsors={translatedSponsors} 
      />
    </div>
  );
};

export default Home;