import '../styles/NiceTable.css'; // Import your CSS file
import PropTypes from 'prop-types'

export const FamilyEventTable = ({ sundaysList, recordsList }) => {

    const finalList = [];

    for(const sunday of sundaysList) {
        console.log(sunday);
        const matchingRecord = recordsList.find((record) => (sunday == record.familyEventDate));
        const row = {date: sunday, family: matchingRecord?.family}
        finalList.push(row);
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
              <th>Fecha</th>
              <th>Familia</th>
            </tr>
          </thead>
          <tbody>
            {finalList.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.family}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    );
}

FamilyEventTable.propTypes = {
    sundaysList: PropTypes.array.isRequired,
    recordsList: PropTypes.array.isRequired,
  };

