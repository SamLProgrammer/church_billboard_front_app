import PropTypes from "prop-types";
// import { fetchMonthFamilyEvents } from "../hooks/useFetchMonthFamilyEvents";
// import { useNavigate } from "react-router-dom";
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
      // const navigate = useNavigate();

    const handleCardClick = async(option) => {
      console.log(option)
        // const {empty, error, snackList, sundaysList, supperList} = JSON.parse(await fetchMonthFamilyEvents(item));
        // if(error == null) {
        //   const selectedMonthData = {empty, snackList, sundaysList, supperList, item};
        //   localStorage.setItem('selectedMonthData', JSON.stringify(selectedMonthData));
        //     navigate("/monthTable");
        // }
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
              <div onClick={() => {handleCardClick('Supper')}} style={{backgroundImage: 'url(../resources/supper.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option">supper</div>
              <div onClick={() => {handleCardClick('Snack')}} style={{backgroundImage: 'url(../resources/break.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option">snack</div>
              <div onClick={() => {handleCardClick('Cleaning')}} style={{backgroundImage: 'url(../resources/cleaning.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option">cleaning</div>
              <div onClick={() => {handleCardClick('birthdate')}} style={{backgroundImage: 'url(../resources/birthdate.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center center',}} className="option">birthdates</div>
              {/* <div onClick={() => {handleCardClick('Supper')}} className="option">
                <img src="./resources/cleaning.png"/>
              </div>
              <div onClick={() => {handleCardClick('Snack')}} className="option">
                <img src="./resources/cleaning.png"/>
              </div>
              <div onClick={() => {handleCardClick('Cleaning')}} className="option">
                <img src="./resources/cleaning.png"/>
              </div>
              <div onClick={() => {handleCardClick('birthdate')}} className="option">
                <img src="./resources/cleaning.png"/>
              </div> */}
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
