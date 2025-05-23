import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Animated Hero Banner */}
      <section className={`relative overflow-hidden py-24 md:py-32 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-green-50 via-yellow-50 to-red-50'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} animate-fadeIn`}>
            About IndabaX Benin Republic
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Empowering Africa through AI Innovation, Education & Community
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#mission" 
              className={`px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-all duration-300 transform hover:scale-105`}
            >
              Our Mission
            </a>
            <a 
              href="/events" 
              className={`px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-transparent border-2 border-green-400 hover:bg-green-900/30 text-green-400' : 'bg-transparent border-2 border-green-600 hover:bg-green-50 text-green-700'} transition-all duration-300 transform hover:scale-105`}
            >
              View Events
            </a>
          </div>
        </div>
      </section>

      {/* Floating Navigation */}
      <div className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex overflow-x-auto scrollbar-hide">
          <a href="#purpose" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Purpose</a>
          <a href="#who-we-are" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Who We Are</a>
          <a href="#connection" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Our Network</a>
          <a href="#mission" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Mission</a>
          <a href="#activities" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Activities</a>
          <a href="#team" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Our Team</a>
          <a href="#impact" className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Impact</a>
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
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>Website Purpose</h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                This digital hub connects Benin's AI community with resources, events, and opportunities. 
                We bridge knowledge gaps through accessible content, event coordination, and fostering 
                collaborations that advance AI innovation across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>🤝 Who We Are</h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                IndabaX Benin Republic is the local chapter of Deep Learning Indaba, part of a pan-African movement 
                strengthening Machine Learning and AI across the continent. We unite researchers, developers, students, 
                and organizations passionate about AI's transformative potential.
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-green-50'}`}>
                <p className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                  "Our vision is an Africa where AI innovation is driven by Africans, for Africans."
                </p>
              </div>
            </div>
            <div className={`h-96 rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format" 
                alt="African tech community" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section id="connection" className="mb-20 scroll-mt-20">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>🌐 Our Continental Network</h2>
            <p className={`text-lg text-center max-w-4xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Benin Republic is proudly part of the Deep Learning Indaba network, joining over 30 African 
              countries in building a self-sustaining AI ecosystem.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Annual Summit", desc: "Connecting with Africa's brightest AI minds" },
                { title: "Knowledge Sharing", desc: "Access to continental research & resources" },
                { title: "Collaborations", desc: "Joint projects with other African chapters" }
              ].map((item, index) => (
                <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>{item.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>🎯 Our Mission</h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Building Benin's AI ecosystem through education, research, and ethical innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Education", desc: "Democratizing AI knowledge" },
              { icon: "🔬", title: "Research", desc: "Advancing local AI solutions" },
              { icon: "🤝", title: "Community", desc: "Connecting Benin's AI talent" },
              { icon: "🌱", title: "Growth", desc: "Nurturing the next generation" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{item.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
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
                alt="Workshop session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>🧠 Our Activities</h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We host annual events that bring together Benin's AI community:
              </p>
              <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                  <span>Hands-on ML workshops for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                  <span>Research paper discussions and presentations</span>
                </li>
                <li className="flex items-start">
                  <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                  <span>Career panels with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                  <span>Networking sessions with international AI experts</span>
                </li>
                <li className="flex items-start">
                  <span className={`inline-block mr-3 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>▹</span>
                  <span>Community projects solving local challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'}`}>🧑‍💻 Meet Our Team</h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Passionate individuals driving AI innovation in Benin Republic
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                name: "Aurelle Ahouansou", 
                role: "Co-organizer & AI Advocate", 
                bio: "Coordinates IndabaX events across Benin, fostering inclusive access to machine learning education.",
                color: theme === 'dark' ? 'text-green-400' : 'text-green-700'
              },
              { 
                name: "Fabrice Gbaguidi", 
                role: "Researcher & Developer", 
                bio: "Connects academic research with real-world applications in agriculture and education using AI.",
                color: theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <h3 className={`text-xl font-bold mb-1 ${member.color}`}>{member.name}</h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-20 scroll-mt-20">
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-red-50'} shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>📌 Why It Matters</h2>
            <p className={`text-lg text-center max-w-4xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Africa's technological future depends on homegrown AI solutions to local challenges
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏥", title: "Healthcare", desc: "AI diagnostics for rural areas" },
                { icon: "🌾", title: "Agriculture", desc: "Smart farming solutions" },
                { icon: "🏦", title: "Finance", desc: "Inclusive fintech innovations" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{item.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
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
            Be Part of Benin's AI Revolution
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto relative z-10 ${theme === 'dark' ? 'text-gray-300' : 'text-green-100'}`}>
            Students, researchers, and tech enthusiasts - together we can shape Africa's AI future.
          </p>
          <div className="relative z-10">
            <a
              href="/register"
              className={`inline-block px-8 py-4 rounded-full font-bold ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white hover:bg-gray-100 text-green-700'} transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;