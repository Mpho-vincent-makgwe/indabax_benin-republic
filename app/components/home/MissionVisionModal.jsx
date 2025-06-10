import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MissionVisionModal = ({ title, content, theme, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div 
      className={`relative max-w-md w-full rounded-lg p-6 shadow-xl ${
        theme === 'dark' 
          ? 'bg-gray-900 ring-2 ring-green-500' 
          : 'bg-white ring-2 ring-green-600'
      }`}
    >
      <button 
        onClick={onClose}
        className={`absolute top-3 right-3 p-1 rounded-full ${
          theme === 'dark' 
            ? 'text-gray-300 hover:bg-gray-800' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <FaTimes className="text-lg" />
      </button>
      <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed`}>
        {content}
      </p>
    </div>
  </div>
);

export default MissionVisionModal;