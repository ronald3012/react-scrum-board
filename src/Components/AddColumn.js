import React, { useState } from "react";
import PropTypes from "prop-types";

const AddColumn = ({ onAddNewColumn }) => {
  const [columnName, setColumnName] = useState("");

  const handleOnChange = (e) => {
    setColumnName(e.target.value);
  };

  return (
    <div className="col column">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddNewColumn(columnName);
        }}
      >
        <input
          type="text"
          placeholder="New column"
          autoComplete="off"
          value={columnName}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

AddColumn.propTypes = {
  onAddNewColumn: PropTypes.func,
};

AddColumn.defaultProps = {
  onAddNewColumn: () => {},
};

export default AddColumn;
