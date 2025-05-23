import React from 'react';
import { Link } from 'react-router';
import { pastEvents, events, speakers, organisers } from '../BackEnd/data';
import { useTheme } from '../context/ThemeContext';

const CommunityEvents = () => {
  const { theme } = useTheme();

  const getSpeakerDetails = (id) => speakers.find(s => s.id === id);
  const getOrganiserDetails = (id) => organisers.find(o => o.id === id);

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className={`relative rounded-xl overflow-hidden mb-16 p-8 md:p-12 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-green-50 to-gray-100'}`}>
        <div className="relative z-10 max-w-2xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            Community & Events
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Join our vibrant community of innovators and changemakers
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2670&auto=format')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Upcoming Events */}
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>📅 Upcoming Events</h2>
            {events.map(event => (
              <div key={event.id} className={`p-5 mb-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={event.image} alt={event.title} className="rounded-md w-full h-48 object-cover mb-3" />
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location} - {new Date(event.date).toLocaleDateString()}</p>
                <p className="mt-2">{event.description}</p>
                <p className="mt-2 font-medium italic">Highlight: {event.highlight}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Organisers:</h4>
                  <ul className="list-disc list-inside">
                    {event.organisers.map(id => {
                      const org = getOrganiserDetails(id);
                      return org && <li key={org.id}>{org.name} - {org.role}</li>;
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Past Events */}
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>📚 Past Events</h2>
            {pastEvents.map(event => (
              <div key={event.id} className={`p-5 mb-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={event.image} alt={event.title} className="rounded-md w-full h-48 object-cover mb-3" />
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location} - {event.date}</p>
                <p className="mt-2">{event.description}</p>
                <p className="mt-2 font-medium italic">Highlight: {event.highlight}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Speakers:</h4>
                  <ul className="list-disc list-inside">
                    {event.speakers.map(id => {
                      const speaker = getSpeakerDetails(id);
                      return speaker && <li key={speaker.id}>{speaker.name} - {speaker.role}</li>;
                    })}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Organisers:</h4>
                  <ul className="list-disc list-inside">
                    {event.organisers.map(id => {
                      const org = getOrganiserDetails(id);
                      return org && <li key={org.id}>{org.name} - {org.role}</li>;
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
