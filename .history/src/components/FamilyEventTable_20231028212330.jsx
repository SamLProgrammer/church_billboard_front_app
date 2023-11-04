import { useState } from "react";
import "../styles/NiceTable.css";
import PropTypes from "prop-types";
import { CellRender } from "./CellRender";
import { useNavigate } from "react-router-dom";

export const FamilyEventTable = ({ sundaysList, recordsList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    console.log('really?');
    navigate('/months');
  }

  const finalList = [];

  if (recordsList == null) {
    for (const sunday of sundaysList) {
      finalList.push({ date: sunday, family: null });
    }
  } else {
    for (const sunday of sundaysList) {
      const matchingRecord = recordsList.find(
        (record) => sunday == record.familyEventDate
      );
      const row = { date: sunday, family: matchingRecord?.family };
      finalList.push(row);
    }
  }

  return (
    <>
    <hr className="separator"/>
      <div className={"nice-table"}>
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
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button onClick={() => goBack()}>Regresar</button>
          <button onClick={() => setIsEditing(!isEditing)}>Editar</button>
          <button >Confirmar</button>
        </div>
      </div>
    </>
  );
};

FamilyEventTable.propTypes = {
  sundaysList: PropTypes.array.isRequired,
  recordsList: PropTypes.array,
};
