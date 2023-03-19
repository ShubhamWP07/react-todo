import React from "react";
import { useState, useEffect } from "react";

export const EditTask = ({ editedTask, updateTask, closeEditMode }) => {
  const [UpdatedTaskData, setUpdatedTaskData] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, []);

  const handleformsumbit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: UpdatedTaskData });
  };

  return (
    <>
      <h3>Update task</h3>
      <form className="main-form-edit-con" onSubmit={handleformsumbit}>
        <div className="input-btn-section">
          <input
            type="text"
            className="input"
            value={UpdatedTaskData}
            onInput={(e) => setUpdatedTaskData(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Edit Task"
          />
        </div>
        <button className="tick-btn" type="submit" aria-label="Add Task">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </>
  );
};
