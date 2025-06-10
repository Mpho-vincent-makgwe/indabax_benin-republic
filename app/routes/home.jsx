import React, { useEffect, useState, useRef } from 'react';
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



// New component for Events Section

// New component for Mission/Vision Section

// New component for Leadership Section
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
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
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

// New component for Organizers Section
const OrganizersSection = ({ theme, t, translatedOrganizers }) => {
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('organizers.title')} 
          theme={theme} 
          underlineColor={theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
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
  <div className={`overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
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
    <div className={`p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
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
              theme === 'dark' ? 'bg-black text-green-300' : 'bg-green-100 text-green-800'
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

// New component for Sponsors Section
// New component for Sponsors Section
const SponsorsSection = ({ theme, t, translatedSponsors, sponsorsRef }) => {
  // Group sponsors by tier with fallback to 'community' if no tier specified
  const tierGroups = translatedSponsors.reduce((groups, sponsor) => {
    const tier = sponsor.tier || 'community';
    if (!groups[tier]) groups[tier] = [];
    groups[tier].push(sponsor);
    return groups;
  }, {});

  // Define tier order for consistent display
  const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'institutional', 'community', 'media'];

  return (
    <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`} id="sponsors">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      {/* Floating AI elements */}
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

        {/* Sponsor Tiers - displayed in order */}
        <div className="space-y-20">
          {tierOrder.filter(tier => tierGroups[tier]).map((tier) => (
            <div key={tier} className="text-center">
              <h3 className={`text-xl font-bold mb-8 uppercase tracking-wider ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                {t(`home.sponsors.tiers.${tier}`)}
              </h3>
              
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                {tierGroups[tier].map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sponsor-logo transition-all duration-300 hover:scale-105 hover:opacity-100 flex items-center justify-center ${
                      tier === 'platinum' ? 'w-64 h-32' :
                      tier === 'gold' ? 'w-48 h-24' :
                      tier === 'silver' ? 'w-36 h-18' :
                      tier === 'bronze' ? 'w-32 h-16' :
                      'w-28 h-14'
                    }`}
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
              </div>
            </div>
          ))}
        </div>

        {/* Modern CTA */}
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

const SponsorItem = ({ sponsor }) => (
  <a 
    href={sponsor.url}
    target="_blank"
    rel="noopener noreferrer"
    className="sponsor-item absolute w-24 h-24 rounded-full bg-white dark:bg-black shadow-md hover:shadow-lg transition-all flex items-center justify-center p-4 hover:scale-110"
  >
    <img 
      src={sponsor.logo} 
      alt={sponsor.name} 
      className="max-w-full max-h-full object-contain"
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/100?text=' + sponsor.name;
      }}
    />
  </a>
);

const SponsorCTA = ({ theme, t }) => (
  <div className={`mt-16 text-center p-8 rounded-xl shadow-lg ${
    theme === 'dark' ? 'bg-black' : 'bg-black'
  }`}>
    <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
      {t('home.sponsors.becomeSponsor')}
    </h3>
    <p className={`mb-6 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-300'}`}>
      {t('home.sponsors.sponsorText')}
    </p>
    <a
      href="mailto:sponsors@indabaxbenin.org"
      className={`inline-block px-6 py-3 rounded-full font-medium ${
        theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
      } text-white transition-colors`}
    >
      {t('home.sponsors.contact')}
    </a>
  </div>
);

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
  const sponsorsRef = useRef(null);

  const [loading, setLoading] = useState(true);

  // Translate sponsors data early since it's used in useEffect
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

  useEffect(() => {
    const rotateSponsors = () => {
      if (sponsorsRef.current) {
        const items = sponsorsRef.current.querySelectorAll('.sponsor-item');
        const radius = Math.min(200, window.innerWidth / 3);
        const centerX = sponsorsRef.current.offsetWidth / 2;
        const centerY = sponsorsRef.current.offsetHeight / 2;
        
        items.forEach((item, index) => {
          const angle = (index * (2 * Math.PI)) / items.length;
          const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2;
          const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2;
          
          item.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    const handleResize = () => {
      rotateSponsors();
    };

    rotateSponsors();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [translatedSponsors]);

  if (loading) {
    return <div><Loader/></div>;
  }

  const latestEvent = events
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  // Translate organizers data
  const translatedOrganizers = organisers.map(organizer => ({
    ...organizer,
    role: t(`home.organizers.roles.${organizer.role}`, { defaultValue: organizer.role }),
    expertise: organizer.expertise?.map(skill => 
      t(`home.organizers.expertise.${skill}`, { defaultValue: skill })
    )
  }));

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} transition duration-300`}>
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

      <Testimonials testimonials={testimonials} theme={theme} />

      <OrganizersSection 
        theme={theme} 
        t={t} 
        translatedOrganizers={translatedOrganizers} 
      />

      <SponsorsSection 
        theme={theme} 
        t={t} 
        translatedSponsors={translatedSponsors} 
        sponsorsRef={sponsorsRef} 
      />
    </div>
  );
};

export default Home;