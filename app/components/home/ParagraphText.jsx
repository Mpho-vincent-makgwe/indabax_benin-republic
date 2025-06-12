const ParagraphText = ({
  text,
  theme,
  textColor,
  breakAfterWords
}) => {
  const paragraphColor = textColor || (theme === "dark" ? "text-gray-300" : "text-gray-800");

  const renderText = () => {
    if (!breakAfterWords || typeof breakAfterWords !== 'number') return text;

    const words = text.split(" ");
    if (words.length <= breakAfterWords) return text;

    return (
      <>
        {words.slice(0, breakAfterWords).join(" ")}<br />
        {words.slice(breakAfterWords).join(" ")}
      </>
    );
  };

  return (
    <p className={`text-base md:text-lg ${paragraphColor}`}>
      {renderText()}
    </p>
  );
};

export default ParagraphText;
