// import React from 'react'

// function List({ task , deleteTodo}) {
//   console.log(task);
//   return (
//     <ul>
//       <li>
//         {task.id}   {task.task} {task.isCompleted}
//         <span><button onClick={() => deleteTodo(task.id)}>Delete</button></span>
//       </li>
//     </ul>
//   );
// }


// export default List

import React from 'react';

function List({ task, toggleCompletion, deleteTodo }) {
  return (
    <div className="task-item">
      <span
        className={`task-text ${task.isCompleted ? 'completed' : ''}`} // Apply "completed" className if task.isCompleted is true
      >
        {task.task}
      </span>
      <div className='btn-checkbox'>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.isCompleted} // Dynamically check or uncheck based on task.isCompleted
        onChange={() => toggleCompletion(task.id)} // Call toggleCompletion when checkbox is toggled
      />
       <button
          className="delete-btn"
          onClick={() => deleteTodo(task.id)} // Call deleteTask when the button is clicked
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default List;
