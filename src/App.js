import React, {useState} from 'react';
import Task from './Components/Task';

function App() {

  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleInput = (e) => {
    setCurrentTask(e.target.value);
  }

  const addTask = () => {
    tasks.push({content:currentTask, isComplete:false});
    setCurrentTask('');
    setTasks([...tasks]);
  }

  const completeTask = (taskIndex) => {
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    setTasks([...tasks]);
  }

  const deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input placeholder='Task' onChange={(e)=>handleInput(e)} value={currentTask} />
      <button onClick={()=>addTask()}>Add Task</button>

      {
        tasks.map((val, i) => {
          return(
            <Task 
              key={i} 
              content={val.content} 
              isComplete={val.isComplete} 
              completeTask={()=>completeTask(i)} 
              deleteTask={()=>deleteTask(i)}
            />
          )
        })
      }
      
    </div>
  );
}

export default App;
