import React from 'react';
import MissionVisionCard from "./MissionVisionCard";
import MissionVisionModal from "./MissionVisionModal";
import SectionHeader from "./SectionHeader";

const MissionVisionSection = ({ theme, t }) => {
   const [activeModal, setActiveModal] = React.useState(null);

  return (
    <div className="mt-4 w-full">
      <div className="grid md:grid-cols-2 gap-3 w-full">
        <MissionVisionCard 
          title={t('home.mission.title')}
          theme={theme}
          bgImage="/assets/hero.jpg"
          onClick={() => setActiveModal('mission')}
        />
        <MissionVisionCard 
          title={t('home.vision.title')}
          theme={theme}
          bgImage="/assets/hero.jpg"
          onClick={() => setActiveModal('vision')}
        />
      </div>

      {/* Modals */}
      {activeModal === 'mission' && (
        <MissionVisionModal
          title={t('home.mission.title')}
          content={t('home.mission.content')}
          theme={theme}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === 'vision' && (
        <MissionVisionModal
          title={t('home.vision.title')}
          content={t('home.vision.content')}
          theme={theme}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};
export default MissionVisionSection;