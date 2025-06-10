// Data
interface Event {
  id: string;
  title: string;
  location: string;
  date: Date;
  image: string;
  description: string;
  organisers: string[];
  highlight: string;
}

interface Organizer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: string;
  country: string;
  organization: string;
  expertise?: string[];
  responsibilities?: string[];
}
interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: string;
  country: string;
  responsibilities: string[];
}
interface PastEvent {
  id: string;
  title: string;
  date: string;
  image: string;
  highlight: string;
  description: string;
  speakers: string[];
  organisers: string[];
  location: string;
}

interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  datePosted: string;
  eventAttended: string;
  location: string;
  profession: string;
}

interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  topics: string[];
  contact: string;
  country: string;
  organization: string;
}

// Add this to your interfaces file (where Event, Organizer, etc. are defined)
interface Sponsor {
  id: string;
  name: string;
  type: string;
  logo: string;
  url: string;
}

export const events: Event[] = [
  {
    id: 'indaba2025',
    title: 'AI for Africa - IndabaX Benin 2025',
    location: 'Cotonou, Benin',
    date: new Date('2025-08-20'),
    image: '/assets/event1.jpg',
    description: 'A premier gathering focused on advancing AI research and collaboration across Africa.',
    organisers: ['emmanuel', 'sandrine'],
    highlight: 'Hands-on AI labs, community collaboration, and research showcases.'
  },
  {
    id: 'aiYouthBenin',
    title: 'AI Youth Camp - Benin',
    location: 'Porto-Novo, Benin',
    date: new Date('2025-07-05'),
    image: '/assets/event2.jpg',
    description: 'Empowering young minds with hands-on AI tools and mentorship sessions.',
    organisers: ['aminatou', 'jules'],
    highlight: 'Coding challenges, team projects, and startup pitch day.'
  },
  {
    id: 'futureTechAfrica',
    title: 'FutureTech Africa 2025',
    location: 'Abomey, Benin',
    date: new Date('2025-09-10'),
    image: '/assets/event3.jpg',
    description: 'Exploring the future of technology across the African continent.',
    organisers: ['emmanuel', 'aminatou'],
    highlight: 'Tech showcases, panel discussions, and futuristic demos.'
  },
];



export const organisers: Organizer[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel D. Houngbo',
    role: 'Event Lead',
    image: '/assets/organiser01.jpg',
    bio: 'Tech ecosystem builder leading community-driven AI events in West Africa.',
    contact: 'https://www.linkedin.com/in/emmanuelhoungbo',
    country: 'Benin',
    organization: 'AI Benin',
    expertise: ['Community Leadership', 'Speaker Management']
  },
  {
    id: 'aminatou',
    name: 'Aminatou Bello',
    role: 'Partnerships Lead',
    image: '/assets/organiser02.jpg',
    bio: 'Strategic thinker connecting local and global partners to support youth in tech.',
    contact: 'mailto:aminatou.bello@connectafrica.org',
    country: 'Benin',
    organization: 'Connect Africa',
    expertise: ['Sponsorships', 'Donor Engagement']
  },
  {
    id: 'jules',
    name: 'Jules K. Agossa',
    role: 'Logistics Coordinator',
    image: '/assets/organiser03.jpg',
    bio: 'Experienced operations manager ensuring events run smoothly from start to finish.',
    contact: 'https://linkedin.com/in/julesagossa',
    country: 'Benin',
    organization: 'EventOps West Africa',
    expertise: ['Venue Management', 'Catering']
  },
  {
    id: 'sandrine',
    name: 'Sandrine Hounsa',
    role: 'Marketing & Media Lead',
    image: '/assets/organiser04.jpg',
    bio: 'Digital storyteller amplifying African innovation stories through media.',
    contact: 'https://twitter.com/sandrinehounsa',
    country: 'Benin',
    organization: 'InnoMedia Africa',
    expertise: ['Social Media Strategy', 'Live Coverage']
  }
];

// Updated Past Events
export const pastEvents: PastEvent[] = [
  {
    id: 'indaba2024',
    title: 'IndabaX Benin 2024',
    date: 'December 10, 2024',
    image: '/images/indaba2024.jpg',
    highlight: 'Over 300 attendees, 12 speakers, and a full day of hands-on ML sessions.',
    description: 'A historic event focusing on practical AI and ML education in Benin.',
    speakers: ['moustapha', 'fatima'],
    organisers: ['emmanuel', 'sandrine'],
    location: 'Cotonou, Benin'
  },
  {
    id: 'makerfair2024',
    title: 'Local Maker Fair',
    date: 'September 1, 2024',
    image: '/images/makerfair2024.jpg',
    highlight: 'Celebrated local inventors, from smart textiles to drone prototypes.',
    description: 'An expo for community-based innovation and open-source tech.',
    speakers: ['jean'],
    organisers: ['jules', 'aminatou'],
    location: 'Parakou, Benin'
  }
];


export const testimonials: Testimonial[] = [
  {
    id: 'claudine',
    name: 'Claudine A.',
    feedback: "The IndabaX event changed my life. I’m now working on my first ML project!",
    datePosted: '2024-12-15',
    eventAttended: 'indaba2024',
    location: 'Cotonou, Benin',
    profession: 'Computer Science Student',
  },
  {
    id: 'issifou',
    name: 'Issifou T.',
    feedback: 'It was inspiring to meet others passionate about tech and Beninese culture.',
    datePosted: '2024-12-20',
    eventAttended: 'indaba2024',
    location: 'Porto-Novo, Benin',
    profession: 'Tech Enthusiast',
  },
  {
    id: 'awa',
    name: 'Awa D.',
    feedback: 'AI Youth Camp helped me discover my interest in data science!',
    datePosted: '2025-07-10',
    eventAttended: 'aiYouthBenin',
    location: 'Porto-Novo, Benin',
    profession: 'High School Student',
  },
  {
    id: 'koffi',
    name: 'Koffi M.',
    feedback: 'FutureTech Africa gave me great ideas for my startup!',
    datePosted: '2025-09-15',
    eventAttended: 'futureTechAfrica',
    location: 'Abomey, Benin',
    profession: 'Entrepreneur',
  },
];



export const speakers: Speaker[] = [
  {
    id: 'moustapha',
    name: 'Moustapha Cissé',
    role: 'Co-Founder',
    image: '/assets/speaker.jpg',
    bio: 'Former head of Google AI in Accra, championing ethical AI development in Africa.',
    topics: ['Responsible AI', 'Machine Learning', 'Research Collaboration'],
    contact: 'https://www.linkedin.com/in/moustaphacisse',
    country: 'Senegal',
    organization: 'African Institute for Mathematical Sciences'
  },
  {
    id: 'shakir',
    name: 'Shakir Mohamed',
    role: 'Director',
    image: '/assets/speaker1.jpg',
    bio: 'Research Director at DeepMind with deep interest in fairness and inclusion in AI.',
    topics: ['AI Ethics', 'Deep Learning', 'AI for Social Good'],
    contact: 'https://www.linkedin.com/in/shakir',
    country: 'South Africa',
    organization: 'DeepMind'
  },
  {
    id: 'sara',
    name: 'Sara Hooker',
    role: 'AI Researcher & Advocate',
    image: '/assets/speaker2.jpg',
    bio: 'Leading accessible AI education and equitable research initiatives across Africa.',
    topics: ['ML Accessibility', 'Fairness in AI', 'AI Education'],
    contact: 'https://www.sarahooker.com',
    country: 'USA',
    organization: 'Cohere For AI'
  },
  {
    id: 'aline',
    name: 'Dr. Aline Dossou',
    role: 'AI Researcher',
    image: '/assets/speaker3.jpg',
    bio: 'Beninese AI scientist working to democratize AI research in francophone Africa.',
    topics: ['Natural Language Processing', 'AI in Healthcare'],
    contact: 'mailto:aline.dossou@ai-benin.org',
    country: 'Benin',
    organization: 'Université d’Abomey-Calavi'
  },
  {
    id: 'kossi',
    name: 'Kossi Mensah',
    role: 'ML Engineer',
    image: '/assets/speakers4.jpg',
    bio: 'Software engineer building scalable ML solutions for real-time logistics.',
    topics: ['ML Ops', 'Computer Vision', 'Data Infrastructure'],
    contact: 'https://github.com/kossimensah',
    country: 'Togo',
    organization: 'LogiTech Africa'
  },
  {
    id: 'fatima',
    name: 'Fatima Sow',
    role: 'Data Scientist',
    image: '/assets/speakers5.jpg',
    bio: 'Data scientist empowering local farmers with AI-powered crop prediction tools.',
    topics: ['AI in Agriculture', 'Predictive Analytics', 'Data for Development'],
    contact: 'mailto:fatima.sow@agritech.sn',
    country: 'Senegal',
    organization: 'AgriTech Senegal'
  },
  {
    id: 'jean',
    name: 'Jean Claude',
    role: 'AI Ethics Advocate',
    image: '/assets/speakers6.jpg',
    bio: 'Ethics researcher working on building frameworks for inclusive AI in Africa.',
    topics: ['AI Policy', 'Ethical Frameworks', 'Governance'],
    contact: 'https://twitter.com/jeanclaudeAI',
    country: 'Benin',
    organization: 'AI Ethics Network'
  }
];


export const leaders: Leader[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel D. Houngbo',
    role: 'Event Lead',
    image: '/assets/speakers7.jpg',
    bio: 'Tech ecosystem builder leading community-driven AI events in West Africa.',
    contact: 'https://www.linkedin.com/in/emmanuelhoungbo',
    country: 'Benin',
    responsibilities: ['Planning', 'Team Coordination', 'Speaker Management']
  },
  {
    id: 'aminatou',
    name: 'Aminatou Bello',
    role: 'Partnerships Lead',
    image: '/assets/leader01.jpg',
    bio: 'Strategic thinker connecting local and global partners to support youth in tech.',
    contact: 'mailto:aminatou.bello@connectafrica.org',
    country: 'Benin',
    responsibilities: ['Sponsorships', 'NGO Partnerships', 'Donor Engagement']
  },
  {
    id: 'jules',
    name: 'Jules K. Agossa',
    role: 'Logistics Coordinator',
    image: '/assets/leader02.jpg',
    bio: 'Experienced operations manager ensuring events run smoothly from start to finish.',
    contact: 'https://linkedin.com/in/julesagossa',
    country: 'Benin',
    responsibilities: ['Venue Management', 'Catering', 'On-site Support']
  },
  {
    id: 'sandrine',
    name: 'Sandrine Hounsa',
    role: 'Marketing & Media Lead',
    image: '/assets/leader03.jpg',
    bio: 'Digital storyteller amplifying African innovation stories through media.',
    contact: 'https://twitter.com/sandrinehounsa',
    country: 'Benin',
    responsibilities: ['Social Media', 'Press Releases', 'Live Coverage']
  }
];

export const sponsors: Sponsor[] = [
  {
    id: 'google',
    name: 'Google AI',
    type: 'platinum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    url: 'https://ai.google/'
  },
  {
    id: 'deepmind',
    name: 'DeepMind',
    type: 'gold',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/DeepMind_logo.svg',
    url: 'https://deepmind.com/'
  },
  {
    id: 'university',
    name: 'University of Abomey-Calavi',
    type: 'academic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/University_of_Benin_logo.png',
    url: 'https://uac.bj/'
  },
  {
    id: 'african-union',
    name: 'African Union',
    type: 'government',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/African_Union_%28emblem%29.svg',
    url: 'https://au.int/'
  },
  {
    id: 'ai4d',
    name: 'AI for Development',
    type: 'nonprofit',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100',
    url: 'https://ai4d.ai/'
  },
  {
    id: 'techstars',
    name: 'Techstars',
    type: 'corporate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Techstars_logo.png',
    url: 'https://www.techstars.com/'
  },
  {
    id: 'zindi',
    name: 'Zindi Africa',
    type: 'community',
    logo: 'https://zindi-public-content.s3.eu-west-2.amazonaws.com/logos/Zindi+logo+square.png',
    url: 'https://zindi.africa/'
  },
  {
    id: 'k4a',
    name: 'Knowledge for All',
    type: 'nonprofit',
    logo: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100',
    url: 'https://knowledgeforall.org/'
  }
];