import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete , onToggle}) {
  return tasks.length > 0 ? tasks.map((task)=> {
    return  <Task task={task} onDelete={onDelete} onToggle={onToggle} key={task.id} />
  } ) : <h4>No task available</h4>
}

export default Tasks
