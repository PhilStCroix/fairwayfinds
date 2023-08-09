import "../colors.css";
import PropTypes from "prop-types";

// Header component
const Header = ({ text, bgColor, textColor, className }) => {
  // Style for header
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    // Header element
    <header className="Head1" style={headerStyle}>
      {text}
    </header>
  );
};

// Default props
Header.defaultProps = {
  text: "Fairway Finds",
  bgColor: 'var("--primary-color")',
  textColor: 'var("--secondary-color")',
  className: "Head1",
};

// Prop types
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
