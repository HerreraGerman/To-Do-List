import React from 'react';

function Task({task, index, onDeleteTask, onToggleComplete}) {
  return (
    <li>
      <input type='checkbox' checked={task.completed} onChange={() => onToggleComplete(index)}/>
      <span>{task.completed ? <del>{task.text}</del> : task.text}</span>
      <button onClick={() => onDeleteTask(index)} className='delete'>🗑️</button>
    </li>
  )
}

export default Task;