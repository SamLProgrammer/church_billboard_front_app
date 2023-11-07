import { useEffect, useState } from "react";
import "../styles/NiceTable.css";
import PropTypes from "prop-types";
import { CellRender } from "./CellRender";
import { useNavigate } from "react-router-dom";

const initializeList = (recordsList, sundaysList, setFinalList) => {
  const auxList = [];
  if (recordsList == null) {
    for (const sunday of sundaysList) {
      auxList.push({ date: sunday, family: null });
    }
    setFinalList(auxList);
  } else {
    for (const sunday of sundaysList) {
      const matchingRecord = recordsList.find(
        (record) => sunday == record.familyEventDate
      );
      const row = { date: sunday, family: matchingRecord?.family };
      auxList.push(row);
    }
    setFinalList(auxList);
  }
}

export const FamilyEventTable = ({ sundaysList, recordsList, updateCurrentData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [finalList, setFinalList] = useState([]);
  const [changedRows, setChangedRows] = useState([]);

  const navigate = useNavigate();
  
  const goBack = () => {
    navigate("/months");
  };

  const updateValue = (index, newValue) => {
    // Create a copy of the list, update the value, and set the updated list in state
    const updatedList = [...finalList];
    updatedList[index].family = newValue;
    setChangedRows((changedRows) => ([...changedRows, updatedList[index]]));
    setFinalList(updatedList);
  };
  
  useEffect(() => {
    initializeList(recordsList, sundaysList, setFinalList);
  }, [])

  const handleConfirmClick = () => {
    console.log()
    // updateCurrentData()
  }
  return (
    <>
      <div className={"nice-table"}>
        <div className="separator"></div>
        {/* <hr className="separator" /> */}
        <table>
          <thead>
            <tr>
              <th colSpan="2" className="table-title">
                Santa Cena
              </th>
            </tr>
            <tr>
              <th style={{ width: "20%" }}>Fecha</th>
              <th style={{ width: "80%" }}>Familia</th>
            </tr>
          </thead>
          <tbody>
            {finalList.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <CellRender
                  family={item.family}
                  index={index}
                  isEditable={isEditing}
                  updateValue={updateValue}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button onClick={() => goBack()}>Regresar</button>
          <button onClick={() => setIsEditing(!isEditing)}>Editar</button>
          <button onClick={() => handleConfirmClick()}>Confirmar</button>
        </div>
      </div>
    </>
  );
};

FamilyEventTable.propTypes = {
  sundaysList: PropTypes.array.isRequired,
  recordsList: PropTypes.array,
  updateCurrentData: PropTypes.func.isRequired,
};
