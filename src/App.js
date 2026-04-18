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

  return( <div>
    <input placeholder="НАзвание" value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
     <button>Добавить</button>


  </div>);
}

export default App;