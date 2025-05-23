import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FAQPage = () => {
  const { theme } = useTheme();

  // FAQ data
  const faqs = [
    {
      question: "What is IndabaX Benin and how is it different from the main Deep Learning Indaba?",
      answer: "IndabaX Benin is our local chapter of the continental Deep Learning Indaba movement. While the main Indaba is a large pan-African conference, our IndabaX focuses specifically on Benin's AI ecosystem with locally relevant content, French/English bilingual sessions, and community-building activities tailored to our region's needs."
    },
    {
      question: "Who can attend IndabaX Benin events?",
      answer: "Our events are open to everyone passionate about AI! We welcome students, researchers, professionals, and even curious beginners. Some workshops may have prerequisites which will be clearly stated in the event details. For our annual conference, we prioritize Benin residents but welcome international participants too."
    },
    {
      question: "Do I need to pay to attend your events?",
      answer: "Most of our regular events are completely free thanks to our sponsors. For larger conferences, we may charge a small fee (typically 5,000-10,000 XOF for students) to cover venue costs, but we always offer scholarships and discounts for those who need them. No one is turned away for lack of funds."
    },
    {
      question: "I'm new to AI. Where should I start?",
      answer: "Welcome to the community! We recommend starting with our monthly 'AI Basics' workshops and joining our beginner-friendly study groups. Our website also has a resources section with curated learning materials in both French and English. Many members started with no background and are now building ML projects!"
    },
    {
      question: "How can I become a speaker or workshop facilitator?",
      answer: "We're always looking for passionate speakers! You don't need to be an expert - just knowledgeable about a topic and willing to share. Submit a proposal through our 'Get Involved' page. For first-timers, we offer speaker coaching to help prepare your session."
    },
    {
      question: "What COVID-19 safety measures do you have in place?",
      answer: "We follow all Benin government health guidelines. In-person events require proof of vaccination or a negative test, and we provide hand sanitizing stations. Many sessions are also streamed online, and we've increased our hybrid event capabilities to accommodate those who prefer remote participation."
    },
    {
      question: "Can my organization partner with IndabaX Benin?",
      answer: "Absolutely! We collaborate with universities, tech companies, NGOs, and government agencies. Partnership opportunities range from sponsoring events to hosting workshops or providing venues. Contact our partnerships team at partners@indabax-benin.org to discuss possibilities."
    },
    {
      question: "How can I stay updated about upcoming events?",
      answer: "Join our WhatsApp community (link on homepage), follow us on Twitter @IndabaXBenin, and subscribe to our monthly newsletter. We announce events at least 4-6 weeks in advance, with early-bird registration periods for popular workshops."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 to-yellow-50'} text-center`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
            Frequently Asked Questions
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Find answers to common questions about IndabaX Benin
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            >
              <div className={`p-6 cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold flex items-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <span className="mr-3">{index + 1}.</span>
                  {faq.question}
                </h3>
                <div className="mt-4">
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className={`mt-16 p-8 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-green-700'}`}>
            Still have questions?
          </h2>
          <p className={`mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our team is happy to help with any other questions you might have about IndabaX Benin.
          </p>
          <a
            href="mailto:contact@indabax-benin.org"
            className={`inline-block px-6 py-3 rounded-full font-medium ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-colors duration-300`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;