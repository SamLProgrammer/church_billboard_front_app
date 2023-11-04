import { useState } from 'react';
import '../styles/NiceTable.css'; 
import PropTypes from 'prop-types';
import { CellRender } from './CellRender';

export const FamilyEventTable = ({ sundaysList, recordsList }) => {
  const [isEditing, setIsEditing] = useState(false); 

  const finalList = [];

  if (recordsList == null) {
    for (const sunday of sundaysList) {
      finalList.push({ date: sunday, family: null });
    }
  } else {
    for (const sunday of sundaysList) {
      const matchingRecord = recordsList.find((record) => sunday == record.familyEventDate);
      const row = { date: sunday, family: matchingRecord?.family };
      finalList.push(row);
    }
  }

  return (
    <>
    <div className="table-container">
      <div className={'nice-table'}>
        <table>
          <thead>
            <tr>
              <th colSpan="2" className='table-title'>Santa Cena</th>
            </tr>
            <tr>
              <th style={{ width: '20%' }}>Fecha</th>
              <th style={{ width: '80%' }}>Familia</th>
            </tr>
          </thead>
          <tbody>
            {finalList.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <CellRender family={item.family} index={index} isEditable={isEditing}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    </>
  );
};

FamilyEventTable.propTypes = {
  sundaysList: PropTypes.array.isRequired,
  recordsList: PropTypes.array,
};
