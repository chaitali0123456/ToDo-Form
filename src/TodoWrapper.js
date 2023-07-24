import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoWrapper() {
  const[task,setTask] = useState([])

  const handleTask =(todo) =>{
    console.log("function called",todo);
    let newArray = [...task,todo]
    setTask(newArray)
  }

  const deleteTask =(id)=>{
    console.log("function");
    let newArr1 = task.filter((task)=>{
      return id !== task.id;
    }
    )
    setTask(newArr1);
  }
  
  return (
    <div className='todo-wrapper'>
      <h1>Get Things Done !!</h1>
      <TodoForm handleTask={handleTask}/>
        {
          task.map((task)=>(
            <Todo task={task} deleteTask={deleteTask}/>
          ))
        }
    </div>
  )
}
