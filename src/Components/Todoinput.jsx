import React from "react";
import { useState } from "react";

export const Todoinput = ({ addTask }) => {
  const [Task, setTask] = useState("");

  const handleformsumbit = (e) => {
    e.preventDefault();
    addTask({
      name: Task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <>
      <form className="main-form-con" onSubmit={handleformsumbit}>
        <div className="input-section">
          <input
            type="text"
            className="input"
            value={Task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="ENTER TASK"
          />
        </div>
        <button className="input-btn" type="submit" aria-label="Add Task">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  );
};
