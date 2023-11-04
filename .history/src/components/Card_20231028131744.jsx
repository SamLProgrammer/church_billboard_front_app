import PropTypes from "prop-types";
import { fetchMonthFamilyEvents } from "../hooks/useFetchMonthFamilyEvents";
import { useResponse } from "../hooks/useResponse";
import { useNavigate } from "react-router-dom";

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

const Card = ({ item, index }) => {
    const navigate = useNavigate();
    const {setResponse} =  useResponse();

    const handleCardClick = async(item) => {
        const {empty, error, snackList, sundaysList, supperList} = JSON.parse(await fetchMonthFamilyEvents(item));
        if(error == null) {
            setResponse((r) => ({...r, empty, snackList, sundaysList, supperList}));
            navigate("/monthTable");
        }
    }

  return (
    <div
    onClick={() => handleCardClick(item)}
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
};

export default Card;