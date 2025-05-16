import React from 'react';

const ConferenceSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-20">
        
        {/* Left: Images */}
        <div className="relative flex-shrink-0 w-80 h-[420px]">
          <img
            src="/assets/speaker.jpg"
            alt="Speaker"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
          <img
            src="/assets/audience.jpg"
            alt="Audience"
            className="absolute top-1/2 -right-16 transform -translate-y-1/2 rounded-xl w-40 h-56 object-cover shadow-md"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md">
            <img src="/assets/community6.jpg" alt="Attendees" className="w-8 h-8 rounded-full" />
            <span className="text-orange-500 font-bold">2k</span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-sm text-orange-500 uppercase font-semibold mb-2">
            About Indaba X
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Africa Through AI & Collaboration
          </h2>
          <p className="text-gray-600 mb-6">
            Indaba X is a local, grassroots gathering that brings the spirit of the Deep Learning Indaba
            to communities across Africa. Our goal is to strengthen machine learning and AI in Africa by
            creating inclusive spaces for learning, sharing, and connecting. From keynotes to hands-on sessions,
            Indaba X offers a platform for collaboration, inspiration, and growth.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-800 mb-6">
            <li>✔ Technical Workshops</li>
            <li>✔ Inspiring Keynotes</li>
            <li>✔ Networking Sessions</li>
            <li>✔ Community Panels</li>
            <li>✔ Research Showcases</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300">
              Register Now
            </button>
            <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-50 transition duration-300">
              Venue Info
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConferenceSection;
