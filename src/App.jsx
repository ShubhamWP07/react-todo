import { useState } from "react";
import { Todoinput } from "./Components/Todoinput";
import Todolist from "./Components/Todolist";
import { EditTask } from "./Components/Edittask";
import useLocalStorage from "./Components/Hooks/UseLocalStorage";
import Footer from "./Components/Footer";

function App() {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [editedTask, seteditedTask] = useState(null);
  const [taskEdeting, settaskEdeting] = useState(false);
  const [PreviousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    settaskEdeting(false);
    PreviousFocusEl.focus();
  };

  const openEditMode = (task) => {
    seteditedTask(task);
    settaskEdeting(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="main-container">
      <header className="header-con">
        <h1 className="main-heading">MY TASK LIST</h1>
      </header>
      {taskEdeting && (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <Todoinput addTask={addTask} />
      {tasks && (
        <Todolist
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          openEditMode={openEditMode}
        />
      )}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
