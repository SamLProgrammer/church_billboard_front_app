import React from "react";
import PropTypes from "prop-types";

const Card = ({ item, index }) => (
  <div
    className="card"
    key={index}
    style={{
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
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
