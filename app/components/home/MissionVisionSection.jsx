import React, { useState, useRef, useEffect } from 'react';
import MissionVisionCard from './MissionVisionCard';

const MissionVisionSection = ({ theme, t }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mt-4 w-full h-full">
      <div className="grid md:grid-cols-2 gap-3 w-full h-full min-h-[120px]">
        <MissionVisionCard 
          title={t('home.mission.title')}
          content={t('home.mission.content')}
          theme={theme}
          bgImage="/assets/hero.jpg"
          isActive={activeCard === 'mission'}
          onClick={() => setActiveCard(activeCard === 'mission' ? null : 'mission')}
          isInView={isInView}
        />
        <MissionVisionCard 
          title={t('home.vision.title')}
          content={t('home.vision.content')}
          theme={theme}
          bgImage="/assets/hero.jpg"
          isActive={activeCard === 'vision'}
          onClick={() => setActiveCard(activeCard === 'vision' ? null : 'vision')}
          isInView={isInView}
        />
      </div>
    </div>
  );
};

export default MissionVisionSection;