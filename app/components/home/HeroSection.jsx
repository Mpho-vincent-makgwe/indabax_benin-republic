import { Link } from 'react-router-dom';
import CountdownItem from "./CountdownItem";
import  Divider  from "./Diveder";

const HeroSection = ({ heroEvent, heroCountdown, t, latestEvent }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero/hh1.jpeg"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {heroEvent?.title || t('home.title')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
          {t('home.subtitle')}
        </p>
        
        <div className="mb-12 p-6 rounded-xl inline-block shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            <CountdownItem value={heroCountdown.days} label={t('home.days')} />
            <Divider />
            <CountdownItem value={heroCountdown.hours} label={t('home.hours')} />
            <Divider />
            <CountdownItem value={heroCountdown.minutes} label={t('home.minutes')} />
            <Divider />
            <CountdownItem value={heroCountdown.seconds} label={t('home.seconds')} />
            <div className="mt-4 text-lg text-gray-300">
            {heroCountdown.days > 0 || heroCountdown.hours > 0 ? t('home.countdownLeft') : t('home.happeningNow')}
          </div>
          </div>
          
        </div>
        
        <div className="flex justify-center">
          <Link 
            to={latestEvent ? `/events/${latestEvent.id}` : '/events'}
            className="px-8 py-3 rounded-full font-bold bg-green-600 hover:bg-green-700 text-white transition-colors shadow-lg"
          >
            {t('home.register')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;