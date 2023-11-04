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
  ]
  
  const getRandomColorAndRemove = (colors) => {
    if (colors.length === 0) {
      return null; // Return null if the array is empty
    }
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colors.splice(randomIndex, 1); // Modify the original array
    return randomColor;
  };

const Card = ({ item, index }) => {

    const colorsCopy = colors.slice();

  return (
    <div
      className="card"
      key={index}
      style={{
        backgroundColor: getRandomColorAndRemove(colorsCopy),
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
