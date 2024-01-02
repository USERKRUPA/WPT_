import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const admindata = [{username:"admin", password:"admin"}];
  const [formdetails, setformdetails] = useState({username:"", password:""})

  const handlechange=(event)=>{
    let {name, value} = event.target;
    setformdetails({...formdetails,[name]:value});
  }

  const navigate = useNavigate();
  const chklogin=()=>{
    console.log("inside login", admindata.username);
    if(formdetails.username === admindata[0].username && formdetails.password === admindata[0].password){
      console.log("valid username and password");
      navigate("/adduser");
    }
  }

  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="username">User Name</label> &nbsp;&nbsp;
    <input type="text" className="form-control" id="username" name="username" value={formdetails.username} onChange={handlechange} required /><br/><br/>
    <label htmlFor="password">Password</label>&nbsp;&nbsp;
    <input type="password" value={formdetails.password} onChange={handlechange} id="password" name="password"   /><br/><br/>
  </div>
  
  <button type="button" className="btn btn-primary" id="submit" name="submit" onClick={chklogin}>Submit</button>
</form>
    </div>
  )
}

