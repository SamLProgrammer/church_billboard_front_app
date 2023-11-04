import { useState } from 'react'; // Import React and useState
import '../styles/NiceTable.css'; // Import your CSS file
import PropTypes from 'prop-types';

export const FamilyEventTable = ({ sundaysList, recordsList }) => {
  const [isEditing, setIsEditing] = useState(false); // Step 1: Add editing state

  const finalList = [];

  if (recordsList == null) {
    for (const sunday of sundaysList) {
      finalList.push({ date: sunday, family: null });
    }
  } else {
    for (const sunday of sundaysList) {
      console.log(sunday);
      const matchingRecord = recordsList.find((record) => sunday == record.familyEventDate);
      const row = { date: sunday, family: matchingRecord?.family };
      finalList.push(row);
    }
  }

  return (
    <>
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
                {renderTableCell(item.family, index, isEditing)} {/* Step 3: Render based on isEditing */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button> {/* Step 2: Add Edit button */}
    </>
  );
};

FamilyEventTable.propTypes = {
  sundaysList: PropTypes.array.isRequired,
  recordsList: PropTypes.array,
};
