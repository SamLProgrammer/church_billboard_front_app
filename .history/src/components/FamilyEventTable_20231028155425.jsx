import { useEffect, useState } from 'react';
import '../styles/NiceTable.css'; // Import your CSS file
import PropTypes from 'prop-types'

export const FamilyEventTable = ({ data }) => {
    const [tableHasContent, setTableHasContent] = useState(false);

    useEffect(() => {
      // Check if the table has content
      if (data.length > 0) {
        setTableHasContent(true);
      }
    }, [data]);
  
    return (
      <div className={`nice-table${tableHasContent ? ' auto-width' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.column1}</td>
                <td>{item.column2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

FamilyEventTable.propTypes = {
    data: PropTypes.object.isRequired,
  };

