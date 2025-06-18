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

interface HackathonEvent {
  id: string;
  title: string;
  date: string;
  image: string;
  highlight: string;
  description: string;
  themes?: string[];
  prizes?: string[];
  winners?: {
    name: string;
    project: string;
  }[];
  outcomes?: string[];
  location: string;
  organisers: string[];
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
    id: 'indaba2023',
    title: 'IndabaX Benin 2023',
    date: 'May 12-13, 2023',
    image: '/images/indaba2023.jpg',
    highlight: 'First IndabaX in Benin with 200+ participants from 5 West African countries',
    description: 'Official DeepLearning IndabaX event featuring workshops on computer vision and NLP for African languages',
    speakers: ['dr-kossi', 'dr-adjovi'],
    organisers: ['prof-akplogan', 'm-kouaro'],
    location: 'University of Abomey-Calavi, Cotonou'
  },
  {
    id: 'aisummit2022',
    title: 'West Africa AI Summit 2022',
    date: 'November 3-5, 2022',
    image: '/images/aisummit2022.jpg',
    highlight: 'Keynote by Prof. Moustapha Cisse from Google AI Accra',
    description: 'Regional conference on AI policy and sustainable development goals',
    speakers: ['prof-cisse', 'dr-fagbemi'],
    organisers: ['minister-tech', 'epac'],
    location: 'Ecole Polytechnique d&pos;Abomey-Calavi'
  },
  {
    id: 'datascience2021',
    title: 'Benin Data Science Bootcamp',
    date: 'August 16-18, 2021',
    image: '/images/datascience2021.jpg',
    highlight: '50 graduates created projects analyzing Benin\'s agricultural data',
    description: '3-day intensive training on Python for data analysis and visualization',
    speakers: ['ing-dovonou'],
    organisers: ['ict-university', 'banqueatlantique'],
    location: 'ICT University, Cotonou'
  },
  {
    id: 'womenintech2020',
    title: 'Women in Tech Benin Symposium',
    date: 'March 8, 2020',
    image: '/images/womenintech2020.jpg',
    highlight: 'Launched 10 female-led tech startups with seed funding',
    description: 'Annual event empowering women in STEM through AI and entrepreneurship',
    speakers: ['mme-salami', 'mme-dosso'],
    organisers: ['impacthub', 'undp-benin'],
    location: 'Impact Hub, Cotonou'
  },
  {
    id: 'hackathon2019',
    title: 'Code4Benin Hackathon',
    date: 'December 6-8, 2019',
    image: '/images/hackathon2019.jpg',
    highlight: 'Winning team developed flood prediction system for Cotonou',
    description: '48-hour competition solving civic challenges using open data',
    speakers: ['mr-gbedjissi'],
    organisers: ['seme-city', 'giz-benin'],
    location: 'Sèmè City Innovation Center'
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
    logo: 'https://th.bing.com/th/id/R.25d83a34b16db391afbeeeca044a5fbd?rik=FTfCsIkntnZ5cQ&pid=ImgRaw&r=0',
    url: 'https://deepmind.com/'
  },
  {
    id: 'university',
    name: 'University of Abomey-Calavi',
    type: 'academic',
    logo: 'https://tse1.mm.bing.net/th/id/OIP.U48Q3bWoA6YwW7PPej3reQHaHy?rs=1&pid=ImgDetMain',
    url: 'https://uac.bj/'
  },
  {
    id: 'african-union',
    name: 'African Union',
    type: 'government',
    logo: 'https://tse2.mm.bing.net/th/id/OIP.C22kd1TdlodJdca7s7K1YgHaGl?rs=1&pid=ImgDetMain',
    url: 'https://au.int/'
  },
  {
    id: 'ai4d',
    name: 'AI for Development',
    type: 'nonprofit',
    logo: 'https://tse1.mm.bing.net/th/id/OIP.FhGUS9c_UpmXXXfsmjfdXQHaEY?rs=1&pid=ImgDetMain',
    url: 'https://ai4d.ai/'
  },
  {
    id: 'techstars',
    name: 'Techstars',
    type: 'corporate',
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/techstars_logo_icon_169642.png',
    url: 'https://www.techstars.com/'
  },
  {
    id: 'zindi',
    name: 'Zindi Africa',
    type: 'community',
    logo: 'https://th.bing.com/th/id/OIP.X6GC7_DM5QVpI3CmDOTG7QAAAA?o=7rm=3&rs=1&pid=ImgDetMain',
    url: 'https://zindi.africa/'
  },
  {
    id: 'k4a',
    name: 'Knowledge for All',
    type: 'nonprofit',
    logo: 'https://th.bing.com/th/id/R.47f348892ed81ae9bb31ea9710990c46?rik=VeOnrnXYrvioGg&riu=http%3a%2f%2fallvectorlogo.com%2fimg%2f2016%2f09%2fkb-knowledge-logo.png&ehk=MdsPVsx61Krwc9hjZwPNyKItp3dOx5LHGi7vRnY0SUA%3d&risl=&pid=ImgRaw&r=0',
    url: 'https://knowledgeforall.org/'
  }
];

// data.ts
export const hackathons: HackathonEvent[] = [
  {
    id: 'aihack2023',
    title: 'aihack2023.title', // Just use the key, text comes from locales
    date: 'aihack2023.date',
    image: '/images/aihack2023.jpg',
    highlight: 'aihack2023.highlight', // Key for translation
    description: 'aihack2023.description', // Key for translation
    themes: ['aihack2023.themes.agriculture', 'aihack2023.themes.healthcare', 'aihack2023.themes.education'], // Keys for translation
    prizes: ['aihack2023.prizes.seed_funding', 'aihack2023.prizes.mentorship', 'aihack2023.prizes.cloud_credits'], // Keys for translation
    winners: [
      { name: 'aihack2023.winners.team_agrovision', project: 'aihack2023.winners.crop_detection' },
      { name: 'aihack2023.winners.team_medbot', project: 'aihack2023.winners.healthcare_chatbot' }
    ],
    location: 'locations.seme_city',
    organisers: ['seme-city', 'indabax-team']
  },
  {
    id: 'ideation2022',
    title: 'ideation2022.title',
    date: 'ideation2022.date',
    image: '/images/ideation2022.jpg',
    highlight: 'ideation2022.highlight',
    description: 'ideation2022.description',
    themes: ['ideation2022.themes.sustainable_cities', 'ideation2022.themes.gender_equality', 'ideation2022.themes.clean_energy'],
    outcomes: ['ideation2022.outcomes.concepts_selected', 'ideation2022.outcomes.projects_funded'],
    location: 'locations.impact_hub',
    organisers: ['impacthub', 'undp-benin']
  }
];