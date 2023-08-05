import "../colors.css";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor, className }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header className="Head1" style={headerStyle}>
      {text}
    </header>
  );
};

Header.defaultProps = {
  text: "Fairway Finds",
  bgColor: 'var("--primary-color")',
  textColor: 'var("--secondary-color")',
  className: "Head1",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
