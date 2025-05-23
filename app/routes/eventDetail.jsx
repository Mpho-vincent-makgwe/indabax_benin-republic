import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { events, pastEvents, speakers, organisers } from '../BackEnd/data';

const EventDetail = () => {
  const { eventId } = useParams();
  const { theme } = useTheme();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    dietaryRequirements: '',
    specialNeeds: ''
  });

  // Combine all events and find the matching one
  const allEvents = [...events, ...pastEvents];
  const event = allEvents.find(e => e.id === eventId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Close the modal after submission
    setShowRegistrationModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      dietaryRequirements: '',
      specialNeeds: ''
    });
  };

  if (!event) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-xl">The event you're looking for doesn't exist.</p>
          <Link 
            to="/events" 
            className={`mt-6 inline-block px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
          >
            Browse All Events
          </Link>
        </div>
      </div>
    );
  }

  // Determine if event is past or upcoming
  const isPastEvent = pastEvents.some(e => e.id === eventId);
  const eventDate = event.date instanceof Date ? event.date : new Date(event.date);
  const currentDate = new Date();

  // Format date
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  // Get speaker and organiser details
  const eventSpeakers = event.speakers ? event.speakers.map(id => speakers.find(s => s.id === id)).filter(Boolean) : [];
  const eventOrganisers = event.organisers ? event.organisers.map(id => organisers.find(o => o.id === id)).filter(Boolean) : [];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-2xl w-full rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6`}>
            <button 
              onClick={() => setShowRegistrationModal(false)}
              className={`absolute top-4 right-4 p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Apply for {event.title}
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Dietary Requirements
                </label>
                <textarea
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleInputChange}
                  rows={2}
                  className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  placeholder="Any allergies or dietary restrictions?"
                />
              </div>
              
              <div className="mb-6">
                <label className={`block mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Special Needs
                </label>
                <textarea
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  rows={2}
                  className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  placeholder="Any accessibility requirements?"
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 rounded-full font-bold ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className={`relative py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className={`inline-block px-4 py-2 rounded-full mb-4 ${isPastEvent || eventDate < currentDate ? 
                (theme === 'dark' ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800') : 
                (theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')}`}
              >
                {isPastEvent || eventDate < currentDate ? 'Past Event' : 'Upcoming Event'}
              </div>
              <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {event.title}
              </h1>
              <div className="flex items-center mb-4">
                <svg className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{event.location}</span>
              </div>
              <div className="flex items-center mb-6">
                <svg className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{formattedDate}</span>
              </div>
              
              {!isPastEvent && eventDate >= currentDate && (
                <button
                  onClick={() => setShowRegistrationModal(true)}
                  className={`inline-block px-8 py-3 rounded-full font-bold ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              About This Event
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {event.description}
            </p>
            <div className={`p-6 rounded-xl mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                Event Highlight
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                {event.highlight}
              </p>
            </div>

            {/* Speakers Section - Only for past events */}
            {isPastEvent && eventSpeakers.length > 0 && (
              <div className="mb-12">
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Featured Speakers
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {eventSpeakers.map(speaker => (
                    <div 
                      key={speaker.id} 
                      className={`flex items-start p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-md transition-colors`}
                    >
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {speaker.name}
                        </h3>
                        <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {speaker.role} • {speaker.organization}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Organisers Section */}
            {eventOrganisers.length > 0 && (
              <div>
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Event Organisers
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {eventOrganisers.map(organiser => (
                    <div 
                      key={organiser.id} 
                      className={`flex items-start p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-md transition-colors`}
                    >
                      <img 
                        src={organiser.image} 
                        alt={organiser.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {organiser.name}
                        </h3>
                        <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {organiser.role} • {organiser.organization}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {organiser.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className={`sticky top-6 p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Event Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Date</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{formattedDate}</p>
                </div>
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Location</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{event.location}</p>
                </div>
                {!isPastEvent && eventDate >= currentDate && (
                  <div>
                    <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Status</h4>
                    <p className="text-green-600 font-medium">Registration Open</p>
                    <button
                      onClick={() => setShowRegistrationModal(true)}
                      className={`mt-2 inline-block w-full text-center px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
                    >
                      Register Now
                    </button>
                  </div>
                )}
                {isPastEvent && (
                  <div>
                    <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Status</h4>
                    <p className={theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}>Event Completed</p>
                    <button 
                      className={`mt-2 inline-block w-full text-center px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                    >
                      View Event Photos
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;