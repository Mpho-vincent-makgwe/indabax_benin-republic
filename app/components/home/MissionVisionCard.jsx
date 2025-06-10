import React from 'react';
const MissionVisionCard = ({ title, theme, bgImage, onClick }) => (
  <div 
    className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg"
    onClick={onClick}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-black/20'} transition-all duration-200`}></div>
    </div>
    <div className="relative h-full flex items-center justify-center p-4">
      <h3 className={`text-lg font-bold text-center text-white drop-shadow-md`}>
        {title}
      </h3>
    </div>
  </div>
);
export default MissionVisionCard;