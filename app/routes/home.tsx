// app/routes/home.tsx

import type { Route } from "../+types/home";
import style from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IndabaX Benin Republic" },
    {
      name: "description",
      content: "Bridging Benin’s culture with African AI excellence.",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-[Open_Sans]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-20 text-white"
        style={{ backgroundImage: "url('/assets/leopard.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 p-8 rounded-xl text-center max-w-3xl" style={{ backgroundImage: "url('/assets/leopard.jpg)" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-[Montserrat] mb-4">
            Welcome to IndabaX Benin Republic
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Bridging Benin’s rich cultural heritage with the future of African AI and community development.
          </p>
          <div className="flex justify-center gap-6 mb-4 text-green-400 font-bold">
            <span>🌍 Culture</span>
            <span>🤝 Community</span>
            <span>📅 Events</span>
          </div>
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

      {/* Introduction Section with Hex Pattern Background */}
      <section
        className="px-4 py-16 text-white"
        style={{
          '--s': '100px',
          '--c1': '#008751',
          '--c2': '#FFD700',
          '--c3': '#D72638',
          background: `
            repeating-conic-gradient(
              from 30deg,
              #0000 0 120deg,
              var(--c3) 0 180deg
            ) calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
            repeating-conic-gradient(
              from 30deg,
              var(--c1) 0 60deg,
              var(--c2) 0 120deg,
              var(--c3) 0 180deg
            )`,
          backgroundSize: 'var(--s) calc(var(--s) * 0.577)',
        } as React.CSSProperties}
      >
        <div className="bg-black/70 p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 font-[Montserrat] mb-4">1. Introduction</h2>
          <p className="text-lg">
            The Benin Republic stands at the cusp of a digital and educational transformation. With a youthful population,
            rising internet access, and growing interest in innovation, Benin is well-positioned to leverage technology
            to empower its communities. This initiative explores how the philosophy, mission, and model of Deep Learning
            Indaba can be adapted to support Benin Republic’s educational, economic, and social development, particularly
            through a purpose-built website.
          </p>
        </div>
      </section>

      {/* Understanding Deep Learning Indaba */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500 font-[Montserrat]">2. Understanding Deep Learning Indaba</h2>
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
          <h2 className="text-3xl font-bold mb-4 text-yellow-500 font-[Montserrat]">3. Adapting Indaba’s Mission to Benin Republic</h2>
          
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

      {/* Visual Highlights */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visual Highlights</h2>
          <p className="mb-6">
            [Placeholder for images showcasing IndabaX events, workshops, and community engagements in Benin.]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-300 h-48 rounded-lg"></div>
            <div className="bg-gray-300 h-48 rounded-lg"></div>
            <div className="bg-gray-300 h-48 rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
