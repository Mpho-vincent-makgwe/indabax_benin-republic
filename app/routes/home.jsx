import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import ConferenceSection from '../components/ConferenceSection';
import { events, leaders, speakers, testimonials, sponsors, organisers } from '../BackEnd/data';
import EventCard from '../components/EventCard';
import LeaderCard from '../components/LeaderCard';
import Testimonials from '../components/Testimonials';
import Loader from '../components/Loader/Loader';

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
  }, [ready, t]); // Added t to dependencies

  useEffect(() => {
    // Rotate sponsors in a circle
    const rotateSponsors = () => {
      if (sponsorsRef.current) {
        const items = sponsorsRef.current.querySelectorAll('.sponsor-item');
        const radius = Math.min(200, window.innerWidth / 3); // Responsive radius
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
  }, [translatedSponsors]); // Added translatedSponsors to dependencies

  if (loading) {
    return <div>
      <Loader/>
    </div>;
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
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition duration-300`}>
      {/* Hero Section - Redesigned */}
       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero/hh1.jpeg"
            alt="Conference background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {heroEvent?.title || t('home.title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            {t('home.subtitle')}
          </p>
          
          {/* Digital clock style timer */}
          <div className="mb-12 p-6 rounded-xl inline-block  shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-mono font-bold text-green-400">
                  {String(heroCountdown.days).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">JOURS</div>
              </div>
              <div className="text-3xl md:text-5xl font-mono text-gray-400">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-mono font-bold text-green-400">
                  {String(heroCountdown.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">HEURES</div>
              </div>
              <div className="text-3xl md:text-5xl font-mono text-gray-400">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-mono font-bold text-green-400">
                  {String(heroCountdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">MINUTES</div>
              </div>
              <div className="text-3xl md:text-5xl font-mono text-gray-400">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-mono font-bold text-green-400">
                  {String(heroCountdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">SECONDES</div>
              </div>
            </div>
            <div className="mt-4 text-lg text-gray-300">
              {heroCountdown.days > 0 || heroCountdown.hours > 0 ? t('home.countdownLeft') : t('home.happeningNow')}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link 
              to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
              className="px-8 py-3 rounded-full font-bold bg-green-600 hover:bg-green-700 text-white transition-colors shadow-lg"
            >
              {t('home.register')}
            </Link>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <ConferenceSection />

      {/* Upcoming Events */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('home.upcomingEvents')}
            </h2>
            <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`}></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events
              .filter(event => new Date(event.date) > new Date())
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(0, 3)
              .map((event) => (
                <div 
                  key={event.id} 
                  className={`block overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}
                >
                  <EventCard event={event} timers={timers} />
                </div>
              ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/events" 
              className={`inline-block px-6 py-3 rounded-full font-medium ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              {t('home.viewAllEvents')}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision - Redesigned */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('home.aboutUs')}
            </h2>
            <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('home.mission.title')}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {t('home.mission.content')}
              </p>
            </div>
            <div className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-yellow-900 to-gray-800' : 'bg-gradient-to-br from-yellow-50 to-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('home.vision.title')}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {t('home.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('home.leaders.title')}
            </h2>
            <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`}></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leaders.slice(0, 4).map((leader) => (
              <div 
                key={leader.id} 
                className={`overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/team" 
              className={`inline-block px-6 py-3 rounded-full font-medium ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              {t('home.leaders.viewTeam')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} theme={theme} />

      {/* Organizers Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('organizers.title')}
            </h2>
            <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {translatedOrganizers.map((organizer) => (
              <div 
                key={organizer.id}
                className={`overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
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
                <div className={`p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
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
                          theme === 'dark' ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'
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
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/team" 
              className={`inline-block px-6 py-3 rounded-full font-medium ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              {t('organizers.viewTeam')}
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section className={`py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 opacity-20 dark:opacity-10"></div>
        
        {/* SVG pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('home.sponsors.title')}
            </h2>
            <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}`}></div>
          </div>
          
          {/* Circle layout for sponsors */}
          <div 
            ref={sponsorsRef}
            className="relative h-96 w-full mb-16"
          >
            {translatedSponsors.map((sponsor) => (
              <a 
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-item absolute w-24 h-24 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center p-4 hover:scale-110"
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
            ))}
          </div>

          {/* Become a sponsor CTA */}
          <div className={`mt-16 text-center p-8 rounded-xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('home.sponsors.becomeSponsor')}
            </h3>
            <p className={`mb-6 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
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
        </div>
      </section>
    </div>
  );
};

export default Home;