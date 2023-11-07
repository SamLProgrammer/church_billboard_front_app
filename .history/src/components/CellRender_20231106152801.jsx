import PropTypes from "prop-types";
import "../styles/NiceTable.css";
import { useState } from "react";

export const CellRender = ({ family, index, isEditable, updateValue}) => {
  const [value, setValue] = useState(family);
  
  const handleChange = (e) => {
    const updatedValue = e.target.value;
    setValue(updatedValue);
    updateValue(index, value);
  }
  

  if (isEditable) {
    return (
      <td key={index}>
        <input className="cell-render" type="text" defaultValue={value} onKeyUpCapture={handleChange}/>
      </td>
    );
  }
  return <td key={index}>{value}</td>;
};

CellRender.propTypes = {
  family: PropTypes.string,
  index: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  updateValue: PropTypes.func.isRequired,
};
