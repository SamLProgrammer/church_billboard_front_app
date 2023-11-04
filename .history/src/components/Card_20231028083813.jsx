import PropTypes from "prop-types";

const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FF99",
    "#9933FF",
    "#F2E94E",
    "#A3D9FF",
    "#7E6B8F",
    "#96E6B3",
  ]

const getRandomColorAndRemove = () => {
  if (colors.length === 0) {
    return null; // Return null if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
//   colors.splice(randomIndex, 1);
//   console.log('randomColor');
//   console.log(randomColor);
  return randomColor;
};

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
