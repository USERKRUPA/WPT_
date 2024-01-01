import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BookService from '../service/BookService';

export default function BookEdit() {
 const navigate = useNavigate();
 const params = useParams();
 const [formdetails, setformdetails] = useState({id:"", title:"", price:"", author:""});
  
  useEffect(()=>{
    BookService.getBook(params.id).then((result)=>{
      console.log("book edit: " , result.data[0].title);
      setformdetails({...result.data[0]});
    }).catch((err)=>{
      console.log(err);
    });
    
  },[])
  
  const handlechange=(event)=>{
    let {name, value} = event.target;
    setformdetails({...formdetails, [name]:value});
  }

  const updatebook=()=>{
    BookService.updateBook(formdetails).then((result)=>{
      setformdetails({id:"", title:"", price:"", author:""});
      console.log(result);
      navigate("/table");
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div>
      <form>
        <br/>
        <div className="form-group">
          <label htmlFor="bookid">Book Id:</label>&nbsp; &nbsp;
          <input type="number" id="bookid" name="id" placeholder="Book Id" value={formdetails.id} onChange={handlechange} readOnly/>
        </div>
        <div className="form-group">
          <label htmlFor="booknm">Book Name:</label>&nbsp; &nbsp;
          <input type="text" id="booknm" name="title" placeholder="Book Title" value={formdetails.title} onChange={handlechange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="bookprice">Book Price:</label>&nbsp; &nbsp;
          <input type="number" id="bookprice" name="price" placeholder="Book Price" value={formdetails.price} onChange={handlechange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="bookauthor">Book Author:</label>&nbsp; &nbsp;
          <input type="text" id="bookauthor" name="author" placeholder="Book Author" value={formdetails.author} onChange={handlechange} required/>
        </div>
        <button type="button" className="btn btn-primary" id="btn" name="btn" onClick={updatebook}>Update Book</button>
      </form>
    </div>
   
  )
}
