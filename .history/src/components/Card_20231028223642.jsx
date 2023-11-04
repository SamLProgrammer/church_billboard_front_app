import PropTypes from "prop-types";
// import { fetchMonthFamilyEvents } from "../hooks/useFetchMonthFamilyEvents";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "../styles/Card.css";

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
  console.log(item);
  console.log(index);
  // const navigate = useNavigate();
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleCardClick = async (item) => {
  //   const { empty, error, snackList, sundaysList, supperList } = JSON.parse(
  //     await fetchMonthFamilyEvents(item)
  //   );
  //   if (error == null) {
  //     const selectedMonthData = { empty, snackList, sundaysList, supperList, item };
  //     localStorage.setItem("selectedMonthData", JSON.stringify(selectedMonthData));
  //     navigate("/monthTable");
  //   }
  // };

  return (
    <>
      <div className="wrapper">
        <div className="single-card">
          <div
            className="front"
            style={{ backgroundColor: colors[index] }}
          >{item}</div>
          <div className="back" style={{ backgroundColor: colors[index] }}>
              <div style={{ backgroundColor: "#33CA7F" }}>supper</div>
              <div style={{ backgroundColor: "red" }}>snack</div>
              <div style={{ backgroundColor: "red" }}>cleaning</div>
              <div style={{ backgroundColor: "red" }}>birthdates</div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Card = ({ item, index }) => {
//     const navigate = useNavigate();

//     const handleCardClick = async(item) => {
//         const {empty, error, snackList, sundaysList, supperList} = JSON.parse(await fetchMonthFamilyEvents(item));
//         if(error == null) {
//           const selectedMonthData = {empty, snackList, sundaysList, supperList, item};
//           localStorage.setItem('selectedMonthData', JSON.stringify(selectedMonthData));
//             navigate("/monthTable");
//         }
//     }

//   return (
//     <div
//     onClick={() => handleCardClick(item)}
//       classNameNameName="card"
//       key={index}
//       style={{
//         backgroundColor: colors[index], // Distribute colors evenly
//       }}
//     >
//       <div classNameNameName="card-content">{item}</div>
//     </div>
//   );
// };

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
