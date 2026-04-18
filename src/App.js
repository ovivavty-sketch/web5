import React, {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("All");

  return( <div>
    <input placeholder="НАзвание" value={name} onChange={(e)=>setName(e.target.value)}/>




  </div>);
}

export default App;