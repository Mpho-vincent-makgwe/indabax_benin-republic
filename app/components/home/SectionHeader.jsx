const SectionHeader = ({
  title,
  theme,
  underlineColor = "bg-green-600",
  textColor,
  breakAfterWords
}) => {
  const headingColor = textColor || (theme === "dark" ? "text-white" : "text-gray-900");

  const renderTitle = () => {
    if (!breakAfterWords || typeof breakAfterWords !== 'number') return title;

    const words = title.split(" ");
    if (words.length <= breakAfterWords) return title;

    return (
      <>
        {words.slice(0, breakAfterWords).join(" ")}<br />
        {words.slice(breakAfterWords).join(" ")}
      </>
    );
  };

  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
        {renderTitle()}
      </h2>
      <div className={`w-24 h-1 mx-auto ${underlineColor}`} />
    </div>
  );
};

export default SectionHeader;
