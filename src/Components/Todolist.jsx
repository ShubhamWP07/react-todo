import React from "react";
import Taskitem from "./Taskitem";

const Todolist = ({ tasks, deleteTask, toggleTask, openEditMode }) => {
  return (
    <ul className="tasklist">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <Taskitem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            openEditMode={openEditMode}
          />
        ))}
    </ul>
  );
};

export default Todolist;
