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
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center px-4 py-20" style={{ backgroundImage: "url('/assets/benin-pattern.jpg')" }}>
      <div className="bg-black/60 p-8 rounded-xl max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-[Montserrat] mb-4">
          Welcome to IndabaX Benin Republic
        </h1>
        <div
          className="w-full h-full flex items-center justify-center rounded-md p-8"
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
              )
            `,
            backgroundSize: 'var(--s) calc(var(--s) * 0.577)',
          } as React.CSSProperties}
        >
          <p className="text-lg md:text-xl font-[Open_Sans] text-gray-100 text-center max-w-2xl">
            Bridging Benin’s rich cultural heritage with the future of African AI and community development.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6 text-green-400 font-bold mt-6">
          <span>🌍 Culture</span>
          <span>🤝 Community</span>
          <span>📅 Events</span>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Join
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full transition duration-300">
            Explore
          </button>
        </div>

        {/* Introduction Section */}
        <div className="text-left text-white font-[Open_Sans] mb-8">
          <h2 className="text-2xl font-[Montserrat] text-yellow-400 mb-2">Introduction</h2>
          <p>
            The Benin Republic stands at the cusp of a digital and educational transformation. With a youthful population, rising internet access, and growing interest in innovation, Benin is well-positioned to leverage technology to empower its communities. This initiative explores how the philosophy, mission, and model of Deep Learning Indaba can be adapted to support Benin Republic’s educational, economic, and social development, particularly through a purpose-built website.
          </p>
        </div>

        {/* Understanding Deep Learning Indaba Section */}
        <div className="text-left text-white font-[Open_Sans] mb-8">
          <h2 className="text-2xl font-[Montserrat] text-yellow-400 mb-2">Understanding Deep Learning Indaba</h2>
          <p>
            <strong>Vision:</strong> "Strengthening African machine learning" — the Indaba envisions a world where African nations are not just participants but global leaders in machine learning, AI, and digital technology.
          </p>
          <p>
            <strong>Mission:</strong>
            <ul className="list-disc list-inside">
              <li>Expand Participation in AI and machine learning research</li>
              <li>Build Communities of local innovators and thinkers</li>
              <li>Strengthen Capacity through education, mentorship, and collaboration</li>
              <li>Promote African Talent and foster global recognition of African contributions</li>
            </ul>
          </p>
          <p>
            <strong>Core Values:</strong>
            <ul className="list-disc list-inside">
              <li>Inclusivity: Making tech education and research accessible to all</li>
              <li>Ubuntu: Shared humanity and community collaboration</li>
              <li>Leadership and Ownership: Africans shaping their future</li>
              <li>Open Knowledge: Promoting open-source learning and content</li>
            </ul>
          </p>
        </div>

        {/* Adapting Indaba’s Mission to Benin Republic Section */}
        <div className="text-left text-white font-[Open_Sans] mb-8">
          <h2 className="text-2xl font-[Montserrat] text-yellow-400 mb-2">Adapting Indaba’s Mission to Benin Republic</h2>
          <p>
            <strong>Create Learning Pathways:</strong>
            <ul className="list-disc list-inside">
              <li>Provide accessible online materials in French and local languages</li>
              <li>Support AI and coding workshops targeting youth and students</li>
              <li>Connect local institutions to global open learning platforms</li>
            </ul>
          </p>
          <p>
            <strong>Support Digital Communities:</strong>
            <ul className="list-disc list-inside">
              <li>Help organize IndabaX Benin events for local knowledge-sharing</li>
              <li>Host forums for educators, entrepreneurs, and developers</li>
              <li>Foster mentorship links between Beninese talent and global experts</li>
            </ul>
          </p>
          <p>
            <strong>Develop Local Content and Relevance:</strong>
            <ul className="list-disc list-inside">
              <li>Promote Beninese culture, language, and issues through tech solutions</li>
              <li>Train youth in AI and ML to solve local problems (agriculture, health, etc.)</li>
            </ul>
          </p>
          <p>
            <strong>Bridge the Digital Divide:</strong>
            <ul className="list-disc list-inside">
              <li>Encourage offline-first, mobile-compatible educational tools</li>
              <li>Build content and tools with consideration for bandwidth and literacy levels</li>
            </ul>
          </p>
        </div>
      </div>
    </section>

      {/* Placeholder for Images */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visual Highlights</h2>
          <p className="mb-4">
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
