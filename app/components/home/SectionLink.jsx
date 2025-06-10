// Reusable Section Link Component
import { Link } from 'react-router-dom';

const SectionLink = ({ to, theme, text }) => (
  <div className="text-center">
    <Link 
      to={to} 
      className={`inline-block px-6 py-3 rounded-full font-medium ${
        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
      } transition-colors`}
    >
      {text}
    </Link>
  </div>
);

export default SectionLink;