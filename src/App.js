import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (name === "" || date === "") return;

    const newTask = {
      id: Date.now(),
      name: name,
      date: date,
      status: "To Do" // по умолчанию
    };

    setTasks([...tasks, newTask]);
    setName("");
    setDate("");
  };

  const changeStatus = (id) => {
    const updated = tasks.map((task) => {
      if (task.id === id) {
        if (task.status === "To Do") task.status = "In Progress";
        else if (task.status === "In Progress") task.status = "Done";
      }
      return task;
    });

    setTasks(updated);
  };

  const today = new Date().toISOString().split("T")[0];
const getColor = (task) => {
  if (task.status === "To Do") return "red";
  if (task.status === "In Progress") return "blue";
  if (task.status === "Done") return "green";
  return "black";
};
  return (
    <div>
      <h2>Задачи</h2>
      <p>Сегодня: {today}</p>

      <input
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addTask}>Добавить</button>

      <ul>
        {tasks.map((task) => {
          const isLate = task.date < today && task.status !== "Done";

          return (
            <li
              key={task.id}
              style={{ color: getColor(task) }}
            >
              {task.name} | {task.date} | {task.status}
              <button onClick={() => changeStatus(task.id)}>
                изменить статус
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
