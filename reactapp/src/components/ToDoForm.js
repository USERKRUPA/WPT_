import React,{useState} from 'react'
import TaskService from '../service/TaskService'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ToDoForm() {
  const [formdetails, setformdetails] = useState({taskname:"",taskduration:""});
  
  const handlechange=(event)=>{
    //let name = event.target.name;
    //let value = event.target.value;
    let {name,value} = event.target;
    setformdetails({...formdetails,[name]:value});
  }

  const addlist=()=>{
    if(formdetails.taskname.trim().length === 0){
        alert("Task name can not be blank");
        return;
    }
    if(formdetails.taskduration < 0 ){
        alert("Task duration can not be -ve");
        return;
    }
    //add task to task array
    console.log(formdetails);   
    TaskService.addTask(formdetails);
  }

  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="name">Task Name</label> &nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text"  id="name" name="taskname" value={formdetails.taskname} onChange={handlechange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="duration">Task Duration</label> &nbsp;&nbsp;&nbsp;&nbsp;
    <input type="number" id="duration" name="taskduration" min="0" value={formdetails.taskduration} onChange={handlechange} required/>
  </div>
  <button type="button" id="btn" name="btn" className="btn btn-primary" onClick={addlist}>Add List</button>
  

</form>
    </div>
  )
}
