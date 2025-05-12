import type { Route } from "./+types/home";
import style from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IndabaX Benin Republic" },
    { name: "description", content: "Bridging Benin’s culture with African AI excellence." },
  ];
}

export default function Home() {
  return (
    <section className="relative bg-[url('')] bg-cover bg-center text-white min-h-screen flex items-center justify-center px-4 py-20">
      <div className="bg-black/60 p-8 rounded-xl max-w-3xl text-center">
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

        <div className="flex justify-center gap-6 mb-6 text-green-400 font-bold">
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
  );
}
