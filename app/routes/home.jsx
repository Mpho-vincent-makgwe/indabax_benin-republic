import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUniversity, FaHandsHelping, FaRobot } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import ConferenceSection from '../components/ConferenceSection';
import { events, leaders, speakers, testimonials, sponsors, organisers } from '../BackEnd/data';
import EventCard from '../components/EventCard';
import LeaderCard from '../components/LeaderCard';
import Testimonials from '../components/Testimonials';

// Countdown logic
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

  const { theme } = useTheme();

  useEffect(() => {
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
  }, []);

  // Get the latest upcoming event for registration
  const latestEvent = events
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition duration-300`}>
      {/* Hero Section */}
      <section
        className={`w-full min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-gray-100'
        }`}
        style={{
          backgroundImage: "url('/assets/hero2.jpg')",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            {heroEvent?.title || 'IndabaX Benin 2024'}
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Join Africa's premier AI conference and be part of the technological revolution
          </p>
          
          <div className={`text-2xl font-bold mb-8 p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700/80 text-yellow-400' : 'bg-white/80 text-yellow-600'
          }`}>
            {heroCountdown.days > 0 || heroCountdown.hours > 0 ? (
              <>
                {heroCountdown.days}d {heroCountdown.hours}h {heroCountdown.minutes}m {heroCountdown.seconds}s Left
              </>
            ) : (
              'Happening Now!'
            )}
          </div>
          
          <Link 
            to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
            className={`inline-block px-8 py-3 rounded-full font-bold ${
              theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
            } text-white transition-colors shadow-lg`}
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Conference Highlights */}
      <ConferenceSection />

      {/* Upcoming Events */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Upcoming Events
            </h2>
            <Link 
              to="/events" 
              className={`mt-4 md:mt-0 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              View All Events
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter(event => new Date(event.date) > new Date())
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(0, 3)
              .map((event) => (
                <Link 
                  key={event.id} 
                  to={`/events/${event.id}`}
                  className={`block overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}
                >
                  <EventCard event={event} timers={timers} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                Our Mission
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                To enhance knowledge and build capacity in machine learning and artificial intelligence in Benin Republic through community-driven initiatives and accessible education.
              </p>
            </div>
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Our Vision
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                To strengthen Machine Learning and Artificial Intelligence in Africa by building a vibrant, inclusive community in Benin Republic that fosters innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Meet Our Leaders
            </h2>
            <Link 
              to="/team" 
              className={`mt-4 md:mt-0 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              View Full Team
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.slice(0, 4).map((leader) => (
              <Link 
                key={leader.id} 
                to={`/leaders/${leader.id}`}
                className={`overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <LeaderCard leader={leader} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} theme={theme} />

      // Add this section after the Leadership Team section in the Home component
{/* Organizers Section */}
<section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Event Organizers
      </h2>
      <Link 
        to="/team" 
        className={`mt-4 md:mt-0 px-4 py-2 rounded-full ${
          theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
        } transition-colors`}
      >
        View Full Team
      </Link>
    </div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {organisers.map((organizer) => (
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
              {organizer.role} • {organizer.organization}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {organizer.expertise?.slice(0, 3).map((skill, index) => (
                <span 
                  key={index} 
                  className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark' ? 'bg-gray-700 text-green-300' : 'bg-green-100 text-green-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link
              to={`/organizers/${organizer.id}`}
              className={`text-sm font-medium ${
                theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              } transition-colors`}
            >
              View Profile →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Sponsors & Partners */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Partners & Sponsors
          </h2>
          
          {/* Sponsors by tier */}
          <div className="mb-16">
            <h3 className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Platinum Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              {sponsors
                .filter(sponsor => sponsor.type === 'platinum')
                .map(sponsor => (
                  <a 
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-8 rounded-xl flex flex-col items-center justify-center transition-all hover:scale-105 ${
                      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-20 object-contain mb-4"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/150?text=' + sponsor.name;
                      }}
                    />
                    <span className="text-lg font-medium">{sponsor.name}</span>
                  </a>
                ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <h3 className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
              {sponsors
                .filter(sponsor => sponsor.type === 'gold')
                .map(sponsor => (
                  <a 
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-6 rounded-lg flex flex-col items-center justify-center transition-all hover:scale-105 ${
                      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-16 object-contain mb-3"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/120?text=' + sponsor.name;
                      }}
                    />
                    <span className="text-sm font-medium">{sponsor.name}</span>
                  </a>
                ))}
            </div>
          </div>

          {/* Other Partners */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Community Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
              {sponsors?.filter(sponsor => !['platinum', 'gold'].includes(sponsor.type))
                .map(sponsor => (
                  <a 
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all hover:scale-105 ${
                      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-12 object-contain mb-2"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/100?text=' + sponsor.name;
                      }}
                    />
                    <span className="text-xs text-center">{sponsor.name}</span>
                  </a>
                ))}
            </div>
          </div>

          {/* Become a sponsor CTA */}
          <div className={`mt-16 text-center p-8 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`}>
              Want to become a sponsor?
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Join our mission to advance AI in Africa and get visibility with our community of researchers, developers, and innovators.
            </p>
            <a
              href="mailto:sponsors@indabaxbenin.org"
              className={`inline-block px-6 py-3 rounded-full font-medium ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
            >
              Contact Our Partnership Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;