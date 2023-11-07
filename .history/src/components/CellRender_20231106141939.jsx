import PropTypes from "prop-types";
import "../styles/NiceTable.css";
import { useEffect, useState } from "react";

export const CellRender = ({ family, index, isEditable, updateValue}) => {
  const [value, setValue] = useState(family);

  useEffect(() => {
    updateValue(index, value);
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  

  if (isEditable) {
    return (
      <td key={index}>
        <input className="cell-render" type="text" defaultValue={value} onChange={handleChange}/>
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
