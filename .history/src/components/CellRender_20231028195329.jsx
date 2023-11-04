export const CellRender = (item, index, isEditable) => {
    if (isEditable) {
      return (
        <td key={index}>
          <input className="cell-render" type="text" defaultValue={item} />
        </td>
      );
    }
    return <td key={index}>{item}</td>;
  };