// src/routes/Home.tsx

import React from 'react';
import Carousel from '../components/Carousel';

const cultureImages = [
  '/assets/culture1.jpg',
  '/assets/culture2.jpg',
  '/assets/culture3.jpg',
  '/assets/culture4.jpg',
  '/assets/culture5.jpg',
  '/assets/culture6.jpg',
  '/assets/culture7.jpg',
  '/assets/culture8.jpg',
 
];

const communityImages = [
  'https://via.placeholder.com/1200x600?text=Community+1',
  'https://via.placeholder.com/1200x600?text=Community+2',
  'https://via.placeholder.com/1200x600?text=Community+3',
];

const eventsImages = [
  'https://via.placeholder.com/1200x600?text=Events+1',
  'https://via.placeholder.com/1200x600?text=Events+2',
  'https://via.placeholder.com/1200x600?text=Events+3',
];

const Home: React.FC = () => {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-[Open_Sans]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-20 text-white"
        style={{ backgroundImage: "url('/assets/leopard.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 p-8 rounded-xl text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-[Montserrat] mb-4">
            Welcome to IndabaX Benin Republic
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Bridging Benin’s rich cultural heritage with the future of African AI and community development.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Join
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Culture Carousel */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-600 font-[Montserrat]">🌍 Culture</h2>
        <Carousel images={cultureImages} direction="left" />
        <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
          The heartbeat of our community is deeply rooted in our cultural values and heritage. Join us in celebrating the
          unique identity of the Benin Republic as we blend tradition with innovation in AI.
        </p>
      </section>

      {/* Community Carousel */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600 font-[Montserrat]">🤝 Community</h2>
        <Carousel images={communityImages} direction="right" />
        <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
          Our community is a vibrant space of thinkers, builders, and change-makers. Together, we grow through
          collaboration, mentorship, and a shared vision of excellence.
        </p>
      </section>

      {/* Events Carousel */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-600 font-[Montserrat]">📅 Events</h2>
        <Carousel images={eventsImages} direction="left" />
        <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
          From workshops to hackathons, IndabaX Benin Republic hosts events that inspire, educate, and empower. Check out
          our calendar and be a part of our next big initiative.
        </p>
      </section>
       {/* Understanding Deep Learning Indaba */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500 font-[Montserrat]">Understanding Deep Learning Indaba</h2>
          <h3 className="text-2xl font-semibold mb-2">Vision:</h3>
          <p className="mb-4">
            "Strengthening African machine learning" — the Indaba envisions a world where African nations are not just
            participants but global leaders in machine learning, AI, and digital technology.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Mission:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Expand participation in AI and machine learning research</li>
            <li>Build communities of local innovators and thinkers</li>
            <li>Strengthen capacity through education, mentorship, and collaboration</li>
            <li>Promote African talent and foster global recognition of African contributions</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Core Values:</h3>
          <ul className="list-disc list-inside">
            <li>Inclusivity: Making tech education and research accessible to all</li>
            <li>Ubuntu: Shared humanity and community collaboration</li>
            <li>Leadership and Ownership: Africans shaping their future</li>
            <li>Open Knowledge: Promoting open-source learning and content</li>
          </ul>
        </div>
      </section>

      {/* Adapting Indaba’s Mission to Benin Republic */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500 font-[Montserrat]">Adapting Indaba’s Mission to Benin Republic</h2>
          
          <h3 className="text-2xl font-semibold mb-2">Create Learning Pathways:</h3>
          <ul className="list-disc list-inside mb-4 ml-6">
            <li>Provide accessible online materials in French and local languages</li>
            <li>Support AI and coding workshops targeting youth and students</li>
            <li>Connect local institutions to global open learning platforms</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Support Digital Communities:</h3>
          <ul className="list-disc list-inside mb-4 ml-6">
            <li>Help organize IndabaX Benin events for local knowledge-sharing</li>
            <li>Host forums for educators, entrepreneurs, and developers</li>
            <li>Foster mentorship links between Beninese talent and global experts</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Develop Local Content and Relevance:</h3>
          <ul className="list-disc list-inside mb-4 ml-6">
            <li>Promote Beninese culture, language, and issues through tech solutions</li>
            <li>Train youth in AI and ML to solve local problems (agriculture, health, etc.)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Bridge the Digital Divide:</h3>
          <ul className="list-disc list-inside ml-6">
            <li>Encourage offline-first, mobile-compatible educational tools</li>
            <li>Build content and tools with consideration for bandwidth and literacy levels</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-yellow-400 to-green-500 text-white">
        <h2 className="text-4xl font-bold mb-6 font-[Montserrat]">Ready to Make an Impact?</h2>
        <p className="text-lg mb-8">
          Join IndabaX Benin Republic and be part of a movement that’s shaping the future of AI in Africa.
        </p>
        <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          Join the Movement
        </button>
      </section>
    </main>
  );
};

export default Home;
