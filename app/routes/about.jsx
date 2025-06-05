import React, { useEffect , useState } from "react";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { theme } = useTheme();
  const { t, ready } = useTranslation();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    if (ready) {
      setLoading(false);
    }}, [ready]);

 if (loading) {
    return <div>Loading translations...</div>;
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Animated Hero Banner */}
      <section className={`relative overflow-hidden py-24 md:py-32 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-green-50 via-yellow-50 to-red-50'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} animate-fadeIn`}>
            {t('about.hero.title')}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t('about.hero.subtitle')}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
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

      {/* Floating Navigation */}
      <div className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex overflow-x-auto scrollbar-hide">
          <a href="#purpose" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.purpose')}
          </a>
          <a href="#who-we-are" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.whoWeAre')}
          </a>
          <a href="#connection" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.network')}
          </a>
          <a href="#mission" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.mission')}
          </a>
          <a href="#activities" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.activities')}
          </a>
          <a href="#team" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.team')}
          </a>
          <a href="#impact" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            {t('about.nav.impact')}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Purpose Section */}
        <section id="purpose" className="mb-20 scroll-mt-20">
          <div className={`flex flex-col md:flex-row gap-8 items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 shadow-lg`}>
            <div className="md:w-1/3">
              <div className={`h-64 w-full rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                <span className={`text-6xl ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>🌍</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                {t('about.purpose.title')}
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('about.purpose.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                🤝 {t('about.whoWeAre.title')}
              </h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('about.whoWeAre.description')}
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-green-50'}`}>
                <p className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                  {t('about.whoWeAre.quote')}
                </p>
              </div>
            </div>
            <div className={`h-96 rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format" 
                alt={t('about.whoWeAre.imageAlt')} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section id="connection" className="mb-20 scroll-mt-20">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
              🌐 {t('about.network.title')}
            </h2>
            <p className={`text-lg text-center max-w-4xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.network.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {networkItems.map((item, index) => (
                <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
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

        {/* Mission Section */}
        <section id="mission" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
              🎯 {t('about.mission.title')}
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.mission.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  {t(item.titleKey)}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`h-96 rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format" 
                alt={t('about.activities.imageAlt')} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
                🧠 {t('about.activities.title')}
              </h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('about.activities.description')}
              </p>
              <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                    <span>{t(`about.activities.item${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'}`}>
              🧑‍💻 {t('about.team.title')}
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
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
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-20 scroll-mt-20">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-red-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
              📌 {t('about.impact.title')}
            </h2>
            <p className={`text-lg text-center max-w-4xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.impact.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {impactItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
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
      </div>

      {/* Animated CTA */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-700'} overflow-hidden`}>
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-green-400/10 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-yellow-400/10 animate-pulse animation-delay-2000"></div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 relative z-10 ${theme === 'dark' ? 'text-green-400' : 'text-white'}`}>
            {t('about.cta.title')}
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto relative z-10 ${theme === 'dark' ? 'text-gray-300' : 'text-green-100'}`}>
            {t('about.cta.subtitle')}
          </p>
          <div className="relative z-10">
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