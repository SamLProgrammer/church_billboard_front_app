import PropTypes from "prop-types";

const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FF99",
    "#9933FF",
    "#FF99FF",
    "#99FF33",
    "#3399FF",
    "#FF3333",
    "#3399FF",
    "#FF3333",
  ];

const Card = ({ item, index }) => (
  <div
    className="card"
    key={index}
    style={{
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    }}
  >
    <div className="card-content">{item}</div>
  </div>
);

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
