import React, { useEffect, useState, useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader/Loader';
import SectionHeader from '../components/home/SectionHeader';
import ParagraphText from '../components/home/ParagraphText';
import { 
  RiTeamLine, 
  RiGlobalLine, 
  RiLightbulbFlashLine, 
  RiBook2Line, 
  RiMicroscopeLine, 
  RiHandHeartLine, 
  RiSeedlingLine,
  RiHospitalLine,
  RiBankLine,
  RiPlantLine,
  RiUser3Line,
  RiUserStarLine,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from "react-icons/ri";

// Import team data
import { organisers as organizersData, speakers as speakersData, leaders as leadersData } from '../BackEnd/data';

const About = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('purpose');
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const teamCarouselRef = useRef(null);

  const networkItems = [
    { 
      titleKey: "about.network.annualSummit", 
      descKey: "about.network.annualSummitDesc",
      icon: <RiGlobalLine className="text-2xl" />
    },
    { 
      titleKey: "about.network.knowledgeSharing", 
      descKey: "about.network.knowledgeSharingDesc",
      icon: <RiBook2Line className="text-2xl" />
    },
    { 
      titleKey: "about.network.collaborations", 
      descKey: "about.network.collaborationsDesc",
      icon: <RiTeamLine className="text-2xl" />
    }
  ];

  const missionItems = [
    { 
      icon: <RiBook2Line className="text-2xl" />, 
      titleKey: "about.mission.education", 
      descKey: "about.mission.educationDesc" 
    },
    { 
      icon: <RiMicroscopeLine className="text-2xl" />, 
      titleKey: "about.mission.research", 
      descKey: "about.mission.researchDesc" 
    },
    { 
      icon: <RiTeamLine className="text-2xl" />, 
      titleKey: "about.mission.community", 
      descKey: "about.mission.communityDesc" 
    },
    { 
      icon: <RiSeedlingLine className="text-2xl" />, 
      titleKey: "about.mission.growth", 
      descKey: "about.mission.growthDesc" 
    }
  ];

  const visionItems = [
    { 
      icon: <RiLightbulbFlashLine className="text-2xl" />, 
      titleKey: "about.vision.innovation", 
      descKey: "about.vision.innovationDesc" 
    },
    { 
      icon: <RiGlobalLine className="text-2xl" />, 
      titleKey: "about.vision.leadership", 
      descKey: "about.vision.leadershipDesc" 
    },
    { 
      icon: <RiHandHeartLine className="text-2xl" />, 
      titleKey: "about.vision.ethics", 
      descKey: "about.vision.ethicsDesc" 
    },
    { 
      icon: <RiUserStarLine className="text-2xl" />, 
      titleKey: "about.vision.talent", 
      descKey: "about.vision.talentDesc" 
    }
  ];

  const impactItems = [
    { 
      icon: <RiHospitalLine className="text-2xl" />, 
      titleKey: "about.impact.healthcare", 
      descKey: "about.impact.healthcareDesc" 
    },
    { 
      icon: <RiPlantLine className="text-2xl" />, 
      titleKey: "about.impact.agriculture", 
      descKey: "about.impact.agricultureDesc" 
    },
    { 
      icon: <RiBankLine className="text-2xl" />, 
      titleKey: "about.impact.finance", 
      descKey: "about.impact.financeDesc" 
    }
  ];

  // Combine all team members with their type
  const allTeamMembers = [
    ...organizersData.map(organizer => ({
      ...organizer,
      type: 'organizer',
      role: t(`organizers.roles.${organizer.role}`) || organizer.role,
      bio: t(`organizers.${organizer.id}.bio`) || organizer.bio,
      organization: t(`organizers.${organizer.id}.organization`) || organizer.organization
    })),
    ...speakersData.map(speaker => ({
      ...speaker,
      type: 'speaker',
      role: t(`speakers.${speaker.id}.role`) || speaker.role,
      bio: t(`speakers.${speaker.id}.bio`) || speaker.bio,
      organization: t(`speakers.${speaker.id}.organization`) || speaker.organization
    })),
    ...leadersData.map(leader => ({
      ...leader,
      type: 'leader',
      role: t(`leaders.${leader.id}.role`) || leader.role,
      bio: t(`leaders.${leader.id}.bio`) || leader.bio,
      organization: t(`leaders.${leader.id}.organization`) || leader.organization
    }))
  ];

  const navItems = [
    { id: 'who-we-are', labelKey: 'about.nav.whoWeAre' },
    { id: 'connection', labelKey: 'about.nav.network' },
    { id: 'mission', labelKey: 'about.nav.mission' },
    { id: 'activities', labelKey: 'about.nav.activities' },
    { id: 'team', labelKey: 'about.nav.team' },
    { id: 'impact', labelKey: 'about.nav.impact' }
  ];

  useEffect(() => {
    if (ready) {
      setLoading(false);
    }
  }, [ready]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['purpose', 'who-we-are', 'connection', 'mission', 'activities', 'team', 'impact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate team carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamIndex(prev => (prev + 1) % allTeamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allTeamMembers.length]);

  const handlePrev = () => {
    setActiveTeamIndex(prev => (prev - 1 + allTeamMembers.length) % allTeamMembers.length);
  };

  const handleNext = () => {
    setActiveTeamIndex(prev => (prev + 1) % allTeamMembers.length);
  };

  // Get visible team members for carousel
  const getVisibleTeamMembers = () => {
    const visible = [];
    const total = allTeamMembers.length;
    
    // Previous member
    visible.push(allTeamMembers[(activeTeamIndex - 1 + total) % total]);
    // Current member
    visible.push(allTeamMembers[activeTeamIndex]);
    // Next member
    visible.push(allTeamMembers[(activeTeamIndex + 1) % total]);
    
    return visible;
  };

  if (loading) {
    return <Loader />;
  }

const Card = ({ children, className = "", excludeDarkMode = false }) => (
  <div className={`
    rounded-lg p-6 shadow-md transition-all duration-300
    ${theme === 'dark' 
      ? (excludeDarkMode 
          ? 'bg-gray-500 border border-gray-300' 
          : 'bg-black border border-white shadow-white/20')
      : 'bg-white border border-gray-200'}
    ${className}
  `}>
    {children}
  </div>
);

  const TeamMemberCard = ({ member }) => {
  const getTypeBadge = () => {
    switch(member.type) {
      case 'speaker':
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Speaker</span>;
      case 'leader':
        return <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Leader</span>;
      case 'organizer':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Organizer</span>;
      default:
        return null;
    }
  };

  const getProfileLink = () => {
    switch(member.type) {
      case 'speaker':
        return `/speakers/${member.id}`;
      case 'organizer':
        return `/organizers/${member.id}`;
      case 'leader':
        return `/leaders/${member.id}`;
      default:
        return `/team/${member.id}`;
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-900">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/assets/placeholder-user.jpg';
            }}
          />
        </div>
        <div className="mb-2">
          {getTypeBadge()}
        </div>
        <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {member.name}
        </h3>
        <p className={`text-sm mb-2 text-orange-500`}>
          {member.role}
        </p>
        <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {member.organization}
        </p>
        <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {member.bio}
        </p>
      </div>
      <a 
        href={getProfileLink()} 
        className={`
          mt-auto w-full py-2 px-4 rounded-md text-center font-medium transition-colors
          ${theme === 'dark' 
            ? 'bg-green-900 text-white hover:bg-green-800' 
            : 'bg-green-800 text-white hover:bg-green-700'}
        `}
      >
        View Profile
      </a>
    </Card>
  );
};

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" 
            alt="About us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('about.hero.title')}
            </h1>
            
            <ParagraphText 
              text={t('about.hero.subtitle')} 
              theme={theme} 
              textColor="text-gray-200"
            />
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="/events" 
                className="px-6 py-3 rounded-full font-medium border-2 border-white text-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('about.hero.eventsButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-sm border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap px-4 py-1 mx-1 text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-green-900 border-b-2 border-green-900'
                    : theme === 'dark' 
                      ? 'text-gray-400 hover:text-gray-300' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Who We Are */}
        <section id="who-we-are" className="mb-20 scroll-mt-32">
          <SectionHeader 
            title={t('about.whoWeAre.title')} 
            theme={theme} 
            underlineColor="bg-green-900"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ParagraphText 
                text={t('about.whoWeAre.description')} 
                theme={theme} 
                className="mb-6"
              />
              {/* In the Who We Are section */}
              <Card className="border-l-4 border-green-900" excludeDarkMode={true}>
                <p className={`italic ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t('about.whoWeAre.quote')}
                </p>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-lg overflow-hidden h-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`rounded-lg overflow-hidden h-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                  alt="Workshop session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`rounded-lg overflow-hidden h-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                  alt="Networking event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`rounded-lg overflow-hidden h-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
                  alt="Conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section id="connection" className="mb-20 scroll-mt-32">
          <SectionHeader 
            title={t('about.network.title')} 
            theme={theme} 
            underlineColor="bg-green-900"
          />
          <ParagraphText 
            text={t('about.network.description')} 
            theme={theme} 
            className="mb-12 max-w-3xl"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {networkItems.map((item, index) => (
              <Card key={index}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-500`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ml-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t(item.titleKey)}
                  </h3>
                </div>
                <ParagraphText 
                  text={t(item.descKey)} 
                  theme={theme} 
                  textColor={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                />
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card>
              <div className="text-left mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 bg-green-900 text-white">
                  <RiLightbulbFlashLine />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {t('about.mission.title')}
                </h3>
                <ParagraphText 
                  text={t('about.mission.subtitle')} 
                  theme={theme} 
                  className="mb-6"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-orange-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t(item.titleKey)}
                      </h4>
                      <ParagraphText 
                        text={t(item.descKey)} 
                        theme={theme} 
                        textColor={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
                        className="text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Vision Card */}
            <Card>
              <div className="text-left mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 bg-green-900 text-white">
                  <RiLightbulbFlashLine />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {t('about.vision.title')}
                </h3>
                <ParagraphText 
                  text={t('about.vision.subtitle')} 
                  theme={theme} 
                  className="mb-6"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {visionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-orange-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t(item.titleKey)}
                      </h4>
                      <ParagraphText 
                        text={t(item.descKey)} 
                        theme={theme} 
                        textColor={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
                        className="text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title={t('about.activities.title')} 
                theme={theme} 
                underlineColor="bg-green-900"
              />
              <ParagraphText 
                text={t('about.activities.description')} 
                theme={theme} 
                className="mb-6"
              />
              <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 text-orange-500`}>▹</span>
                    <span>{t(`about.activities.item${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-lg overflow-hidden h-96 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                alt="Activities illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced Carousel */}
        <section id="team" className="mb-20 scroll-mt-32">
          <SectionHeader 
            title={t('about.team.title')} 
            theme={theme} 
            underlineColor="bg-green-900"
          />
          <ParagraphText 
            text={t('about.team.subtitle')} 
            theme={theme} 
            className="mb-12 max-w-3xl text-center center"
          />
          
          <div className="relative mt-4 pt-4">
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous team member"
              >
                <RiArrowLeftSLine className="text-3xl text-gray-600 dark:text-gray-300" />
              </button>
              
              <div className="flex items-center justify-center gap-6 w-full max-w-4xl mb-6 pb-6 mt-6 pt-6 mx-auto overflow-hidden">
                {getVisibleTeamMembers().map((member, index) => (
                  <div 
                    key={`${member.name}-${index}`}
                    className={`
                      transition-all duration-500 ease-in-out
                      ${index === 1 ? 
                        'scale-110 opacity-100 z-10' : 
                        'scale-90 opacity-60 z-0'}
                      w-full max-w-md
                    `}
                  >
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next team member"
              >
                <RiArrowRightSLine className="text-3xl text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {allTeamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTeamIndex ? 'bg-green-900 w-6' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-20 scroll-mt-32">
          <SectionHeader 
            title={t('about.impact.title')} 
            theme={theme} 
            underlineColor="bg-green-900"
          />
          <ParagraphText 
            text={t('about.impact.description')} 
            theme={theme} 
            className="mb-12 max-w-3xl"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {impactItems.map((item, index) => (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-4 bg-orange-100 text-orange-500`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t(item.titleKey)}
                </h3>
                <ParagraphText 
                  text={t(item.descKey)} 
                  theme={theme} 
                  textColor={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                />
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Enhanced CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`
            inline-block px-8 py-12 rounded-2xl 
            ${theme === 'dark' ? 'bg-gray-900' : 'bg-black'}
            border-2 
            ${theme === 'dark' ? 'border-green-600' : 'border-green-900'}
            shadow-lg
            ${theme === 'dark' ? 'shadow-green-600/20' : 'shadow-green-900/20'}
            relative
            before:absolute before:inset-0 before:rounded-2xl before:border-2 
            ${theme === 'dark' ? 'before:border-orange-600' : 'before:border-orange-900'}
            before:pointer-events-none before:shadow-lg
            ${theme === 'dark' ? 'before:shadow-orange-600/20' : 'before:shadow-orange-900/20'}
            before:-z-10 before:-m-1
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('about.cta.title')}
            </h2>
            <ParagraphText 
              text={t('about.cta.subtitle')} 
              theme="dark" 
              textColor="text-green-100"
              className="mb-8 mx-auto text-xl"
            />
            <div>
              <a
                href="/register"
                className="inline-block px-8 py-4 rounded-full font-bold bg-white text-green-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('about.cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;