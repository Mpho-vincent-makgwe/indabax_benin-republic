import React, { useState, useEffect } from 'react';

const MissionVisionCard = ({ title, content, theme, bgImage, isActive, onClick, isInView }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isManuallyFlipped, setIsManuallyFlipped] = useState(false);

  useEffect(() => {
    if (!isManuallyFlipped) {
      setIsFlipped(isInView);
    }
  }, [isInView, isManuallyFlipped]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setIsManuallyFlipped(!isFlipped);
    onClick();
  };

  return (
    <div
      className={`w-full h-full perspective-1000 cursor-pointer rounded-xl overflow-hidden relative transition-shadow duration-400 ease-in-out ${
        theme === 'dark' 
          ? 'border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-[glow_2s_infinite_ease-in-out]' 
          : 'border-3 border-transparent animate-[gradient-border_3s_infinite]'
      }`}
      style={
        theme === 'light' 
          ? { 
              backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(45deg, green, orange)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box'
            } 
          : {}
      }
      onClick={handleClick}
    >
      <div className={`w-full h-full transform-style-preserve-3d transition-transform duration-800 ease-in-out relative ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front Side */}
        <div 
          className="w-full h-full backface-hidden absolute rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-full h-full backdrop-brightness-50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold text-center">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className={`w-full h-full backface-hidden absolute rounded-xl overflow-hidden flex flex-col justify-center p-6 rotate-y-180 ${
          theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
        }`}>
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold text-center">{title}</h3>
            <p className="text-xs leading-relaxed mt-2">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCard;