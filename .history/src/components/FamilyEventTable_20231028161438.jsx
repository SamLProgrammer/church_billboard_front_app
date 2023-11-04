import '../styles/NiceTable.css'; // Import your CSS file
import PropTypes from 'prop-types'

export const FamilyEventTable = ({ sundaysList, recordsList }) => {
    console.log(sundaysList);
    console.log(recordsList);
    const finalList = [];
    for(const sunday of sundaysList) {
        console.log(sunday);
        const matchingRecord = recordsList.find((record) => (sunday == record.familyEventDate));
        const row = {date: sunday, family: matchingRecord?.family}
        finalList.push(row);
    }

    console.log(finalList);
    return (
        <>
      <div className={'nice-table'}>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            {sundaysList.map((item, index) => (
              <tr key={index}>
                <td>{sundaysList[index]}</td>
                <td>{item.column2}</td>
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

