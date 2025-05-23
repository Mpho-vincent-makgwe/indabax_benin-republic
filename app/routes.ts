import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route('about', 'routes/about.jsx'),
    route('culture', 'routes/culture.jsx'),
    route('events', 'routes/communityevents.jsx'),
    route('team', 'routes/team.jsx'),
    route('speakers/:speakerId', 'routes/speakersDetail.jsx'),
    route('leaders/:leaderId', 'routes/leadersDetail.jsx'),
    route('events/:eventId', 'routes/eventDetail.jsx'),
    route('organizers/:organiserId', 'routes/organizersDetail.jsx'),
    route('contact', 'routes/contact.jsx'),
    route('testimonials', 'routes/testimonials.jsx'),
    route('gallery', 'routes/gallery.jsx'),
    route('faq', 'routes/faq.jsx')
] satisfies RouteConfig;
