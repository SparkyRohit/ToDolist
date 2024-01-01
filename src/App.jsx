import { useState } from "react";

const App = () => {
  const [Tasks, setTasks] = useState(["task 1", "task2"]);
  const [newTask,setNewTasks]=useState("")

  const addTask=()=>{
    if(newTask.trim() !==" "){
setTasks([...Tasks,newTask])
setNewTasks(" ")
    }
  }

const Enterkeyfun=(e)=>{
  if(e.key=="Enter"){
    addTask()
  }
}

  return (
    <div>
      <h1 className="bg-blue-500 text-white flex content-center justify-center text-5xl font-bold shadow-lg">
        SPARKY TODOLIST
      </h1>

      <ul>
        {Tasks.map((Task, index) => (
          <li key={index}>{Task}</li>
        ))}
      </ul>

      <textarea
        className="border-2 shadow-sm text-2xl font-semibold" 
        cols="100"
        rows="2"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e)=>setNewTasks(e.target.value)}
        onKeyDown={Enterkeyfun}
      ></textarea>
      <button onClick={addTask} className="bg-blue-400 animate-bounce block h-12 w-32 rounded text-white text-3xl font-semibold">Add task</button>
    </div>
  );
};

export default App;
