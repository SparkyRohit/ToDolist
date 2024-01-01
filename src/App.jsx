import { useState } from "react"
import {Trash} from 'lucide-react'


const App = () => {
  const [tasks,setTasks]=useState([])
  const [newTask,setNewTask]=useState(" ")

const addTask=()=>{
  if(newTask.trim()!==""){
    setTasks([...tasks,newTask])
    setNewTask(" ")
  }
}

const Enterfun=(e)=>{
  if(e.key =="Enter"){
    addTask()
  }
}
const Trashbtn=(index)=>{
  const updatedTasks = tasks.filter((_,i) => i !== index);
  setTasks(updatedTasks)
}
  return (
    <div>
      <h1 className='bg-blue-500 text-white flex content-center justify-center text-5xl font-bold shadow-lg'>
        SPARKY TODOLIST
      </h1>

      <ul>
      
          {tasks.map((task,index)=>(
            <li className="bg-orange-400 mb-[1px] text-white font-semibold text-2xl pl-2 content-center justify-center flex" key={index}> {`${task}`}
            <Trash className="text-red-400 bg-white rounded ml-auto" onClick={(i)=>Trashbtn(index)}/>
            </li>
          ))}
      
      </ul>

      <textarea className='border-2 shadow-sm text-2xl font-semibold' cols="100" rows="2" placeholder='Enter your task' value={newTask} onChange={(e)=>setNewTask(e.target.value)} onKeyDown={Enterfun}
      ></textarea>

      <button className="block h-12 w-32 bg-blue-400 text-white text-3xl font-semibold rounded animate-bounce" onClick={addTask}>add task</button>
    </div>
  )
}

export default App