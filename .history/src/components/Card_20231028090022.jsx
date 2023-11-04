import PropTypes from "prop-types";

const Card = ({ item, index }) => {

  return (
    <div
      className="card"
      key={index}
      style={{
        backgroundColor: getRandomColorAndRemove(),
      }}
    >
      <div className="card-content">{item}</div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
