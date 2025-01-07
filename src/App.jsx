import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import List from './components/List'


function App() {


  const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks).filter((task) => !task.isCompleted) : [];
    })

    useEffect(() => {
      const filteredTasks = tasks.filter((task) => !task.isCompleted)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }, [tasks]);
    

  const addTodo = (todo) => {
   let newTodo = {
      id: tasks.length + 1,
      task : todo,
      isCompleted: false
    }
    setTasks([...tasks, newTodo])
  }

  const deleteTodo = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <Form addTodo={addTodo} />
      
        {tasks.map((task) => (
          <List /*key={task.id}*/
           task={task}
            deleteTodo={deleteTodo} 
            toggleCompletion={toggleCompletion} />
        ))}
      
      </div>
      
    </div>
  );
}

export default App;
