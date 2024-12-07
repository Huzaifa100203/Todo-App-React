import React, { useState } from 'react'

function Form({addTodo}) {

  const [todo, setTodo] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
  addTodo(todo)
  setTodo('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)} />
      <button>Add Task</button>
      </form>
    </>
  )
}

export default Form
