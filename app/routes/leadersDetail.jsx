import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { leaders } from '../BackEnd/data';

const LeaderDetail = () => {
  const { leaderId } = useParams();
  const { theme } = useTheme();

  // Debugging logs
  console.log("All leaders:", leaders);
  console.log("Looking for leader with ID:", leaderId);

  // Find the matching leader (case insensitive)
  const leader = leaders.find(l => 
    l.id.toLowerCase() === leaderId?.toLowerCase()
  );

  if (!leader) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Leader Not Found</h1>
          <p className="text-xl">Leader with ID "{leaderId}" not found.</p>
          <p className="text-lg mb-4">Available IDs: {leaders.map(l => l.id).join(', ')}</p>
          <Link 
            to="/" 
            className={`mt-6 inline-block px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`relative py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-green-500"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {leader.name}
              </h1>
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                {leader.role}
              </div>
              
              <div className="flex items-center mb-4">
                <svg className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{leader.country}</span>
              </div>
              
              <div className="flex items-center mb-6">
                <svg className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{leader.organization}</span>
              </div>
              
              <a
                href={leader.contact}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact {leader.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Biography
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {leader.bio}
            </p>

            {/* Responsibilities Section */}
            {leader.responsibilities && leader.responsibilities.length > 0 && (
              <div className="mb-12">
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Event Responsibilities
                </h2>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {leader.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <svg className={`w-5 h-5 mt-1 mr-2 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className={`sticky top-6 p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Leader Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Role</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{leader.role}</p>
                </div>
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Organization</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{leader.organization}</p>
                </div>
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Country</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{leader.country}</p>
                </div>
                <div>
                  <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Contact</h4>
                  <a 
                    href={leader.contact} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block mt-1 ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
                  >
                    {leader.contact.startsWith('mailto:') 
                      ? leader.contact.replace('mailto:', '') 
                      : leader.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDetail;