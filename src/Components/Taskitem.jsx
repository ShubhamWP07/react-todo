import React from "react";
import { useState } from "react";

const Taskitem = ({ task, deleteTask, toggleTask, openEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckedBoxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };
  return (
    <li className="taskitems">
      <div className="taskitemInner">
        <input
          type="Checkbox"
          checked={isChecked}
          onChange={handleCheckedBoxChange}
          name={task.name}
          id={task.id}
          className="checkbox"
        />
        <label htmlFor={task.id} className="tasklistitemtxt">
          {task.name}
        </label>
      </div>
      <div className="btnGroup">
        {/* Edit-btn */}
        <button className="edit" onClick={() => openEditMode(task)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        {/* Delete-btn */}
        <button className="delete" onClick={() => deleteTask(task.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default Taskitem;
