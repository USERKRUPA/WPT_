import React,{ useState } from 'react'
import UserService from '../service/UserService'

export default function UserComponent() {
  const [formdetails, setformdetails] = useState({first_name:"", last_name:"",address:"",pincode:""})

  const handlechange=(event)=>{
    let {name, value} = event.target;
    setformdetails({...formdetails,[name]:value});
  }

  const insertUser=()=>{
    UserService.insertuser(formdetails).then(()=>{
      setformdetails({first_name:"", last_name:"",address:"",pincode:""});
    //  navigate("/table");
    })
    .catch((err)=>{console.log(err);});
  }

  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="first_name">First Name</label> &nbsp;&nbsp;
    <input type="text" className="form-control" id="first_name" name="first_name" value={formdetails.first_name} onChange={handlechange} required /><br/><br/>
    <label htmlFor="last_name">Last Name</label>&nbsp;&nbsp;
    <input type="text" value={formdetails.last_name} onChange={handlechange} id="last_name" name="last_name" required/><br/><br/>
    <label htmlFor="address">Address</label>&nbsp;&nbsp;
    <input type="text" value={formdetails.address} onChange={handlechange} id="address" name="address" required/><br/><br/>
    <label htmlFor="pincode">Pin code</label>&nbsp;&nbsp;
    <input type="number" value={formdetails.pincode} onChange={handlechange} id="pincode" name="pincode" min="100000" max="999999" required/><br/><br/>
  </div>
  
  <button type="button" className="btn btn-primary" id="submit" name="submit" onClick={insertUser}>Submit</button>
</form>
    </div>
  )
}
