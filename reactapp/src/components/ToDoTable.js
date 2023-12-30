import React from 'react'
import TaskService from '../service/TaskService'

export default function ToDoList() {
  let tasks = TaskService.getAllTasks();
  return (
    <div>
     
<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Task Duration</th>
    </tr>
  </thead>
  <tbody>
    
    {tasks.map((task,index)=><tr>
      <td key={index}>{task.taskname}</td>
      <td key="index">{task.taskduration}</td>
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}
