import PropTypes from "prop-types";
import { fetchMonthFamilyEvents } from "../hooks/useFetchMonthFamilyEvents";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";
import { useEffect } from "react";
import { useState } from "react";

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
      const [monthData, setMonthData] = useState({})

      const fetchMonthData = async (item) => {
        const response = JSON.parse(await fetchMonthFamilyEvents(item));
        setMonthData(response);
      }

      useEffect(() => {
        fetchMonthData(item);
      }, [])
      

    const handleCardClick = async(option) => {
        const {error} = monthData;
        if(error == null) {
        switch (option) {
          case "Supper": {
            localStorage.setItem('selectedMonthData', JSON.stringify({monthData, selectedMonth: item, type: 'H'}));
            navigate("/monthTable");
          }
            break;
          case "Snack":
            console.log("Tuesday is a productive day.");
            break;
          case "Cleaning":
            console.log("Tuesday is a productive day.");
            break;
          case "Birthdate":
            console.log("Tuesday is a productive day.");
            break;
        }
      }
    }

  return (
    <>
      <div className="wrapper">
        <div className="single-card">
          <div
            className="front"
            style={{ backgroundColor: colors[index] }}
          >{item}</div>
          <div className="back" style={{ backgroundColor: colors[index] }}>
              <div onClick={() => {handleCardClick('Supper')}} style={{backgroundImage: 'url(/supper.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option"></div>
              <div onClick={() => {handleCardClick('Snack')}} style={{backgroundImage: 'url(/break.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option"></div>
              <div onClick={() => {handleCardClick('Cleaning')}} style={{backgroundImage: 'url(/cleaning.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option"></div>
              <div onClick={() => {handleCardClick('Birthdate')}} style={{backgroundImage: 'url(/birthdate.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
