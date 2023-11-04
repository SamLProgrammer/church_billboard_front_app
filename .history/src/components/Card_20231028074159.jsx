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

// Shuffle the colors array to ensure randomness
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(colors);

const Card = ({ item, index }) => (
  <div
    className="card"
    key={index}
    style={{
      backgroundColor: colors[index % colors.length], // Use the index to access a color
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
