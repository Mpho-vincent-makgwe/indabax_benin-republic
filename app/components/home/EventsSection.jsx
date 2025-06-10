import SectionHeader from "./SectionHeader";
import EventCard from "./EventCard";
import SectionLink from "./SectionLink";

const EventsSection = ({ events, timers, theme, t }) => {
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title={t('home.upcomingEvents')} 
          theme={theme} 
          underlineColor={theme === 'dark' ? 'bg-green-500' : 'bg-green-600'}
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="h-full" // Ensure the container takes full height
            >
              <EventCard event={event} timers={timers} />
            </div>
          ))}
        </div>
        
        <SectionLink to="/events" theme={theme} text={t('home.viewAllEvents')} />
      </div>
    </section>
  );
};

export default EventsSection;