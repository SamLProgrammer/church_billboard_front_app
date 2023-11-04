import '../styles/NiceTable.css'; // Import your CSS file
import PropTypes from 'prop-types'

export const FamilyEventTable = ({ sundaysList, recordsList }) => {
    console.log(sundaysList);
    console.log(recordsList);
    for(const record of recordsList) {
        console.log(record);
    }
    return (
        <div></div>
    //   <div className={'nice-table'}>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Column 1</th>
    //           <th>Column 2</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {sundaysList.map((item, index) => (
    //           <tr key={index}>
    //             <td>{sundaysList[index]}</td>
    //             <td>{item.column2}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    );
}

FamilyEventTable.propTypes = {
    sundaysList: PropTypes.array.isRequired,
    recordsList: PropTypes.array.isRequired,
  };

