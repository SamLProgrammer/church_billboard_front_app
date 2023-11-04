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
    <div className="wrapper">
    <div className="single-card">
        <div className="front">
          {item}
        </div>
        <div className="back" style={{backgroundColor: colors[index]}}>
            <div className="content">
                <h2>Mark Jones</h2>
                <h4>Web Developer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                <p className="socials">
                 <i className="fa fa-youtube"></i> 
                 <i className="fa fa-instagram"></i> 
                 <i className="fa fa-vimeo"></i> 
                 <i className="fa fa-dribbble"></i>
                </p>
            </div>
        </div>
    </div>
</div>
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
//       classNameName="card"
//       key={index}
//       style={{
//         backgroundColor: colors[index], // Distribute colors evenly
//       }}
//     >
//       <div classNameName="card-content">{item}</div>
//     </div>
//   );
// };

Card.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;