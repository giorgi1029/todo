import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const toggleTaskDone = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`} id="main">
      <header>
        <h1 className="maintext">T O D O</h1>
        <input
          className="maininput"
          type="text"
          placeholder="Create new Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTask}
        />
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>
      <div className="task-list-container">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.done ? "done" : ""}`}>
              <span className="task-text" onClick={() => toggleTaskDone(index)}>
                {task.text}
              </span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                &#10006;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
