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
  ];

export const getRandomColorAndRemove = () => {
  if (colors.length === 0) {
    return null; // Return null if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colors.splice(randomIndex, 1); // Modify the original array
  return randomColor;
};

export const Card = ({ item, index }) => {
  // Make a shallow copy of the colors array for this component
  const colorsCopy = colors.slice();

  return (
    <div
      className="card"
      key={index}
      style={{
        backgroundColor: getRandomColorAndRemove(colorsCopy), // Pass the copy to the function
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