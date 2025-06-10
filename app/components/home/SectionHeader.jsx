const SectionHeader = ({ title, theme, underlineColor }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1 mx-auto ${underlineColor}`}></div>
  </div>
);
export default SectionHeader
