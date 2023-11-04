import './TopCenteredTitle.css'; // Import your CSS file
import PropTypes from "prop-types";

export const MonthTitle = ({ title }) => {
  return (
    <div className="top-centered-title">
      <h1>{title}</h1>
    </div>
  );
}

MonthTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };


