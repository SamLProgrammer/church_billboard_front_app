import PropTypes from "prop-types";

const Card = ({ item, index, color }) => {

  return (
    <div
      className="card"
      key={index}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="card-content">{item}</div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
