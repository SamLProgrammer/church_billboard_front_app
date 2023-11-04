import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useResponse } from "../hooks/useResponse";

const colors = [
  "#FF5733", // Reddish-Orange
  "#33FF57", // Neon Green
  "#5733FF", // Blue-Violet
  "#FF3399", // Pink
  "#33FF99", // Bright Teal
  "#9933FF", // Purple
  "#FF99FF", // Light Pink
  "#99FF33", // Lime Green
  "#3399FF", // Bright Blue
  "#FF3333", // Red
  "#00FFFF", // Cyan
  "#FF00FF", // Magenta
];

for (let i = colors.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [colors[i], colors[j]] = [colors[j], colors[i]];
}

const Card = ({ item, index, fetchMonths }) => {
    const [selectedItem, setSelectedItem] = useState();
    const { response } = useResponse();

    const getMonthData = async (sessionToken) => {
        const monthData = await fetchMonths(selectedItem, sessionToken);
        console.log(JSON.parse(monthData));
    }

    useEffect(() => {
        if (selectedItem) {
            console.log('changed to: ' + selectedItem)
          const {sessionToken} = response;
          getMonthData(sessionToken);
        }
      }, [selectedItem]);
      
    
    const callFetchMonths = (item) => {
        setSelectedItem(item);
    }

  return (
    <div
    onClick={() => callFetchMonths(item)}
      className="card"
      key={index}
      style={{
        backgroundColor: colors[index], // Distribute colors evenly
      }}
    >
      <div className="card-content">{item}</div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  fetchMonths: PropTypes.func.isRequired,
};

export default Card;