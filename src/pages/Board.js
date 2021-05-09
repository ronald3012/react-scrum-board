import { useState } from "react";

import Header from "./Components/Header";
import Column from "./Components/Column";
import AddColumn from "./Components/AddColumn";
import { COLUMNS, TASKS } from "./utils/constants/boardData";

const Board = () => {
  const [columns, setColumns] = useState(COLUMNS);
  const [tasks, setTasks] = useState(TASKS);

  const handleAddNewColumn = (newColumnName) => {
    const columnsMutated = columns;
    const lastColumn = columnsMutated[columnsMutated.length - 1];

    setColumns([
      ...columns,
      {
        id: lastColumn.id + 1,
        name: newColumnName,
      },
    ]);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="columns row flex-nowrap">
        {columns.map((c) => (
          <Column Column={c} key={c.id} tasks={tasks} setTasks={setTasks} />
        ))}

        <AddColumn onAddNewColumn={handleAddNewColumn} />
      </div>
    </div>
  );
};

export default Board;
