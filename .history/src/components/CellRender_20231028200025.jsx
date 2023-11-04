import PropTypes from 'prop-types'

export const CellRender = ({family, index, isEditable}) => {
    if (isEditable) {
      return (
        <td key={index}>
          <input className="cell-render" type="text" defaultValue={family} />
        </td>
      );
    }
    return <td key={index}>{family}</td>;
  };

  CellRender.propTypes = {
    family: PropTypes.string,
    index: PropTypes.number.isRequired,
    isEditable: PropTypes.bool.isRequired,
  };