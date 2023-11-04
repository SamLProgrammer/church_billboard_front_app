import PropTypes from 'prop-types'

export const CellRender = ({item, index, isEditable}) => {
    if (isEditable) {
      return (
        <td key={index}>
          <input className="cell-render" type="text" defaultValue={JSON.stringify(item)} />
        </td>
      );
    }
    return <td key={index}>{JSON.stringify(item)}</td>;
  };

  CellRender.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    isEditable: PropTypes.bool.isRequired,
  };