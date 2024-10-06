const LimitedDisplay = ({ text, limit = 100 }) => {
  // Ensure text is a string and trim it
  const safeText = (typeof text === 'string' ? text : '').trim();

  // Truncate the text if it exceeds the limit
  const displayText = safeText.length > limit
    ? `${safeText.slice(0, limit)}`
    : safeText;

  return (
    <span>
      {displayText}
    </span>
  );
};

export default LimitedDisplay;