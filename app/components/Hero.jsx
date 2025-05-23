import React from 'react'

const Hero = ({thene}) => {
  return (
     {/* Hero Section */}
        <section
          className={`min-h-screen flex flex-col justify-center items-center text-center p-10 bg-cover bg-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-gray-100'
          }`}
          style={{
            backgroundImage: "url('/assets/hero.jpg')",
          }}
        >
          <div>
            <h1 className="text-5xl font-bold mb-4 text-green-400">
              {heroEvent?.title || 'Next Big Event'}
            </h1>
            <p className="text-lg mb-6 max-w-xl text-white drop-shadow">
              Join us for a transformative event on AI and community building in Benin.
            </p>
            <div className="text-2xl text-yellow-300 font-bold mb-4">
              {heroCountdown.days > 0 || heroCountdown.hours > 0 ? (
                <>
                  {heroCountdown.days}d {heroCountdown.hours}h {heroCountdown.minutes}m {heroCountdown.seconds}s Left
                </>
              ) : (
                'Happening Now!'
              )}
            </div>
            <Link to="/register" className="text-white bg-green-500 px-6 py-3 rounded-full hover:bg-green-700 transition">
              Register Now
            </Link>
          </div>
        </section>
  )
}

export default Hero