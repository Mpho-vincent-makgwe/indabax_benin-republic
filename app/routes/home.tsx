import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUniversity, FaHandsHelping, FaRobot } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ConferenceSection from '../components/ConferenceSection';


// Data
const events = [
  {
    id: 'indaba2025',
    title: 'AI for Africa - IndabaX Benin 2025',
    location: 'Cotonou, Benin',
    date: new Date('2025-08-20'),
    image: '/assets/event1.jpg',
  },
  {
    id: 'aiYouthBenin',
    title: 'AI Youth Camp - Benin',
    location: 'Porto-Novo, Benin',
    date: new Date('2025-07-05'),
    image: '/assets/event2.jpg',
  },
  {
    id: 'futureTechAfrica',
    title: 'FutureTech Africa 2025',
    location: 'Abomey, Benin',
    date: new Date('2025-09-10'),
    image: '/assets/event3.jpg',
  },
];

const speakers = [
  { name: 'Moustapha Cissé', role: 'Co-Founder', id: 'moustapha', image: '/assets/speaker.jpg' },
  { name: 'Shakir Mohamed', role: 'Director', id: 'shakir', image: '/assets/speaker1.jpg' },
  { name: 'Sara Hooker', role: 'AI Researcher & Advocate', id: 'sara', image: '/assets/speaker2.jpg' },
  { name: 'Dr. Aline Dossou', role: 'AI Researcher', id: 'aline', image: '/assets/speaker3.jpg' },
  { name: 'Kossi Mensah', role: 'ML Engineer', id: 'kossi', image: '/assets/speakers4.jpg' },
  { name: 'Fatima Sow', role: 'Data Scientist', id: 'fatima', image: '/assets/speakers5.jpg' },
  { name: 'Jean Claude', role: 'AI Ethics Advocate', id: 'jean', image: '/assets/speakers6.jpg' },
];


const leaders = [
  { id: 'emmanuel', name: 'Emmanuel D. Houngbo', role: 'Event Lead', image: '/assets/speakers7.jpg' },
  { id: 'aminatou', name: 'Aminatou Bello', role: 'Partnerships Lead', image: '/assets/leader.jpg' },
  { id: 'jules', name: 'Jules K. Agossa', role: 'Logistics Coordinator', image: '/assets/leader1.jpg' },
  { id: 'sandrine', name: 'Sandrine Hounsa', role: 'Marketing & Media Lead', image: '/assets/leader2.jpg' },
];

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

  return (
    <>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Hero / Countdown */}
      <section
  className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-gradient-to-b from-white to-gray-100"
  style={{
    backgroundImage: "url('/assets/hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl font-bold mb-4 text-green-700">
      {heroEvent?.title || 'Next Big Event'}
    </h1>
    <p className="text-lg mb-6 max-w-xl text-white drop-shadow">
      Join us for a transformative event on AI and community building in Benin.
    </p>
    <div className="text-2xl text-yellow-200 font-bold mb-4">
      {heroCountdown.days > 0 || heroCountdown.hours > 0 ? (
        <>
          {heroCountdown.days}d {heroCountdown.hours}h {heroCountdown.minutes}m {heroCountdown.seconds}s Left
        </>
      ) : (
        'Happening Now!'
      )}
    </div>
    <div className="flex gap-4 justify-center">
      <Link to="/events" className="text-white bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition">
        View All Events
      </Link>
      <Link to="/register" className="text-white bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition">
        Register Now
      </Link>
    </div>
  </div>
</section>



      <ConferenceSection/>

      {/* Upcoming Events */}
      <section className=" bg-gray-50">
        <div className=" flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <Link to="/events" className="text-green-600 underline">View More</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`} className="block bg-white shadow-md rounded-md hover:shadow-lg transition overflow-hidden">
              <img src={event.image} alt={event.title} className="h-28 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"/>
                
              <div className="p-3">
                <h3 className="text-base font-bold">{event.title}</h3>
                <p className="text-xs mt-1 text-gray-600">{event.location}</p>
                <p className="text-xs text-gray-500">{event.date.toDateString()}</p>
                <p className="text-xs mt-2 text-blue-600 font-semibold">
                  {timers[event.id]?.days}d {timers[event.id]?.hours}h {timers[event.id]?.minutes}m {timers[event.id]?.seconds}s left
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section className=" bg-yellow-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">
            <span className=" px-2 py-1 rounded">Sponsors & Partners</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <FaGoogle className="text-3xl text-blue-500 mx-auto mb-2" />
            <h4 className="text-gray-700 font-semibold">Google Research</h4>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <FaUniversity className="text-3xl text-green-600 mx-auto mb-2" />
            <h4 className="text-gray-700 font-semibold">University of Abomey-Calavi</h4>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <FaHandsHelping className="text-3xl text-red-500 mx-auto mb-2" />
            <h4 className="text-gray-700 font-semibold">African AI Foundation</h4>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <FaRobot className="text-3xl text-purple-600 mx-auto mb-2" />
            <h4 className="text-gray-700 font-semibold">Benin Innovation Lab</h4>
          </div>
        </div>
      </section>


      {/* Mission and Vision */}
      <section className=" bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To enhance knowledge and build capacity in machine learning and artificial intelligence in Benin Republic.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To strengthen Machine Learning and Artificial Intelligence in Africa by building a strong community in Benin Republic.
          </p>
        </div>
      </section>
     
     
      {/* Gallery Carousel */}
{/* <section className="p-6 bg-gray-100">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold">Gallery</h2>
    <Link to="/gallery" className="text-green-600 underline font-medium">View More</Link>
  </div>

  <Slider
    dots={true}
    infinite={true}
    speed={600}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={4000}
    className="rounded overflow-hidden"
  >
   
    <div className="h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/800x400?text=IndabaX+Opening+Ceremony')` }}>
    </div>

  
    <div className="h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/800x400?text=Workshops+In+Action')` }}>
    </div>

   
    <div className="h-64 md:h-96 bg-black flex items-center justify-center text-white text-xl font-semibold">
      🎥 Video Highlight: 2024 Recap (Coming Soon)
    </div>

   
    <div className="h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/800x400?text=Youth+AI+Camp')` }}>
    </div>
  </Slider>
</section> */}

      {/* Meet the Leaders */}
      <section className=" bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Meet the Leaders</h2>
          <Link to="/team" className="text-green-600 underline">View More</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {leaders.map((leader) => (
            <Link key={leader.id} to={`/team/${leader.id}`} className="block bg-white shadow-md rounded-md hover:shadow-lg transition overflow-hidden">
              <img src={leader.image} className="h-28 bg-gray-100 flex items-center justify-center text-gray-400 text-sm" alt= "leaders picture"/>
              <div className="p-3">
                <h3 className="text-base font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Speakers */}
      <section className=" bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Featured Speakers</h2>
          <Link to="/speakers" className="text-green-600 underline">View More</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {speakers.map((spk) => (
            <Link key={spk.id} to={`/speakers/${spk.id}`} className="block bg-white shadow-md rounded-md hover:shadow-lg transition overflow-hidden">
              <img src={spk.image} className="h-28 bg-gray-100 flex items-center justify-center text-gray-400 text-sm" alt="Speaker Image"/>
              
              <div className="p-3">
                <h3 className="text-base font-semibold">{spk.name}</h3>
                <p className="text-sm text-gray-600">{spk.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
