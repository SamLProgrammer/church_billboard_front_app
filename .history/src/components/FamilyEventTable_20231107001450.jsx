import { useEffect, useState } from "react";
import "../styles/NiceTable.css";
import PropTypes from "prop-types";
import { CellRender } from "./CellRender";
import { useNavigate } from "react-router-dom";
import { updateFamilyEvents } from "../hooks/useFamilyEventUpdate";

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
};

export const FamilyEventTable = ({
  sundaysList,
  recordsList,
  type,
  updateCurrentData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [finalList, setFinalList] = useState([]);
  const [changedRows, setChangedRows] = useState([]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/months");
  };

  const updateValue = (index, newValue) => {
    const updatedList = [...finalList];
    updatedList[index].family = newValue;

    const existingIndex = changedRows.findIndex((obj) => obj.index === index);

    if (existingIndex !== -1) {
      const newChangedRows = [...changedRows];
      newChangedRows[existingIndex] = { index, ...updatedList[index] };
      setChangedRows(newChangedRows);
    } else {
      setChangedRows([...changedRows, { index, ...updatedList[index] }]);
    }
    setFinalList(updatedList);
  };

  useEffect(() => {
    initializeList(recordsList, sundaysList, setFinalList);
  }, []);

  const handleConfirmClick = () => {
    const {success, message} = updateFamilyEvents(changedRows, type);
    console.log(success);
    console.log(message);
  };
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
  type: PropTypes.string.isRequired,
  updateCurrentData: PropTypes.func.isRequired,
};
