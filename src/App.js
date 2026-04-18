import React, {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
  if (name === "" || date === "") return;

  const newTask = {
    id: Date.now(),
    name: name,
    date: date,
    status: "To Do"
  };

  setTasks([...tasks, newTask]);
  setName("");
  setDate("");
};

const changeStatus = (id)=>{
  const updated = tasks.map((task)=>{
    if (task.id === id) { 
      if (task.status === "To Do") task.status = "In Progress"; 
      else if (task.status === "In Progress") task.status = "Done";}
      return task;
});
setTasks (updated);};

const filteredTasks = tasks.filter((task) => {
  if (filter === "All") return true;
  return task.status === filter;
});

const today = new Date().toISOString().split("T")[0];

  return( <div>
    <h2>Задачи</h2>
    <p>Сегодня: {today}</p>
    <input placeholder="НАзвание" value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
     <button onClick={addTask} >Добавить</button>

    <ul>
      {tasks.map((task)=>(
        <li key ={task.id}> {task.name}| {task.date}|{task.status}</li>
      )
    )}
    </ul>
    <select onChange={(e) => setFilter(e.target.value)}>
  <option>All</option>
  <option>To Do</option>
  <option>In Progress</option>
  <option>Done</option>
</select>
     <button onClick={() => changeStatus(task.id)}> изменить статус </button>
  </div>);
}

export default App;