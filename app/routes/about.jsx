import React, { useEffect, useState } from "react";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader/Loader';

const About = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('purpose');

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

  if (loading) {
    return <Loader />;
  }

  const networkItems = [
    { titleKey: "about.network.annualSummit", descKey: "about.network.annualSummitDesc" },
    { titleKey: "about.network.knowledgeSharing", descKey: "about.network.knowledgeSharingDesc" },
    { titleKey: "about.network.collaborations", descKey: "about.network.collaborationsDesc" }
  ];

  const missionItems = [
    { icon: "📚", titleKey: "about.mission.education", descKey: "about.mission.educationDesc" },
    { icon: "🔬", titleKey: "about.mission.research", descKey: "about.mission.researchDesc" },
    { icon: "🤝", titleKey: "about.mission.community", descKey: "about.mission.communityDesc" },
    { icon: "🌱", titleKey: "about.mission.growth", descKey: "about.mission.growthDesc" }
  ];

  const impactItems = [
    { icon: "🏥", titleKey: "about.impact.healthcare", descKey: "about.impact.healthcareDesc" },
    { icon: "🌾", titleKey: "about.impact.agriculture", descKey: "about.impact.agricultureDesc" },
    { icon: "🏦", titleKey: "about.impact.finance", descKey: "about.impact.financeDesc" }
  ];

  const teamMembers = [
    { 
      nameKey: "about.team.aurelle.name",
      roleKey: "about.team.aurelle.role",
      bioKey: "about.team.aurelle.bio",
      color: theme === 'dark' ? 'text-green-400' : 'text-green-700'
    },
    { 
      nameKey: "about.team.fabrice.name",
      roleKey: "about.team.fabrice.role", 
      bioKey: "about.team.fabrice.bio",
      color: theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'
    }
  ];

  const navItems = [
    { id: 'purpose', labelKey: 'about.nav.purpose' },
    { id: 'who-we-are', labelKey: 'about.nav.whoWeAre' },
    { id: 'connection', labelKey: 'about.nav.network' },
    { id: 'mission', labelKey: 'about.nav.mission' },
    { id: 'activities', labelKey: 'about.nav.activities' },
    { id: 'team', labelKey: 'about.nav.team' },
    { id: 'impact', labelKey: 'about.nav.impact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`relative py-24 md:py-32 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            {t('about.hero.title')}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t('about.hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="#mission" 
              className={`px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-all duration-300 transform hover:scale-105`}
            >
              {t('about.hero.missionButton')}
            </a>
            <a 
              href="/events" 
              className={`px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-transparent border-2 border-green-400 hover:bg-green-900/30 text-green-400' : 'bg-transparent border-2 border-green-600 hover:bg-green-50 text-green-700'} transition-all duration-300 transform hover:scale-105`}
            >
              {t('about.hero.eventsButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Navigation - Positioned below main navbar */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? theme === 'dark' 
                      ? 'bg-gray-700 text-green-400' 
                      : 'bg-green-100 text-green-700'
                    : theme === 'dark' 
                      ? 'hover:bg-gray-700 text-gray-300' 
                      : 'hover:bg-gray-100 text-gray-700'
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
        {/* Purpose Section */}
        <section id="purpose" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`rounded-xl overflow-hidden h-80 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format&fit=crop" 
                alt="Purpose illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                {t('about.purpose.title')}
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('about.purpose.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="mb-20 scroll-mt-32">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {t('about.whoWeAre.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('about.whoWeAre.description')}
                </p>
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-yellow-50'}`}>
                  <p className={`font-medium ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    {t('about.whoWeAre.quote')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg overflow-hidden h-40 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`rounded-lg overflow-hidden h-40 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                    alt="Workshop session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`rounded-lg overflow-hidden h-40 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                    alt="Networking event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`rounded-lg overflow-hidden h-40 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
                    alt="Conference"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section id="connection" className="mb-20 scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {t('about.network.title')}
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.network.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {networkItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {t(item.titleKey)}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-20 scroll-mt-32">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              {t('about.mission.title')}
            </h2>
            <p className={`text-lg text-center max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.mission.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-blue-100'} border ${theme === 'dark' ? 'border-gray-600' : 'border-blue-200'}`}
                >
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {t(item.titleKey)}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-20 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                {t('about.activities.title')}
              </h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('about.activities.description')}
              </p>
              <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>▹</span>
                    <span>{t(`about.activities.item${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-xl overflow-hidden h-96 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                alt="Activities illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-20 scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
              {t('about.team.title')}
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-red-50'} shadow-lg`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-20 h-20 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center text-3xl`}>
                    {index === 0 ? '👩‍💻' : '👨‍💻'}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${member.color}`}>
                      {t(member.nameKey)}
                    </h3>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t(member.roleKey)}
                    </p>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {t(member.bioKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-20 scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              {t('about.impact.title')}
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.impact.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {impactItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  {t(item.titleKey)}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-600'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-white'}`}>
            {t('about.cta.title')}
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-green-100'}`}>
            {t('about.cta.subtitle')}
          </p>
          <div>
            <a
              href="/register"
              className={`inline-block px-8 py-4 rounded-full font-bold ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white hover:bg-gray-100 text-green-700'} transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              {t('about.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;