import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { speakers } from '../BackEnd/data';

const SpeakersDetail = () => {
  const { speakerId } = useParams();
  const { theme } = useTheme();

  const speaker = speakers.find(s =>
    s.id.toLowerCase() === speakerId?.toLowerCase()
  );

  if (!speaker) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Speaker Not Found</h1>
          <p className="text-xl">Speaker with ID "{speakerId}" not found.</p>
          <p className="text-lg mb-4">Available IDs: {speakers.map(s => s.id).join(', ')}</p>
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
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={speaker.image} alt={speaker.name} className="w-48 h-48 rounded-full shadow-lg border-4 border-blue-500" />
          <div>
            <h1 className="text-3xl font-bold">{speaker.name}</h1>
            <p className="text-blue-600 dark:text-blue-300">{speaker.topic}</p>
            <p className="mt-4">{speaker.bio}</p>
            <a href={speaker.contact} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
              Contact {speaker.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersDetail;
