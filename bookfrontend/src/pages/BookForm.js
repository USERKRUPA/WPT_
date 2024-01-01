import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookService from '../service/BookService';

export default function BookForm() {
 const navigate =useNavigate();
 const [formdetails, setformdetails] = useState({id:"", title:"", price:"", author:""});
  
  const handlechange=(event)=>{
    let {name, value} = event.target;
    setformdetails({...formdetails, [name]:value});
  }

  const addbook=()=>{
    BookService.insertBook(formdetails);
    navigate("/table");
  }

  return (
    <div>
      <form onSubmit={addbook}>
        <br/>
        <div class="form-group">
          <label for="bookid">Book Id:</label>&nbsp; &nbsp;
          <input type="number" id="bookid" name="id" placeholder="Book Id" value={formdetails.id} onChange={handlechange} required/>
        </div>
        <div class="form-group">
          <label for="booknm">Book Name:</label>&nbsp; &nbsp;
          <input type="text" id="booknm" name="title" placeholder="Book Title" value={formdetails.title} onChange={handlechange} required/>
        </div>
        <div class="form-group">
          <label for="bookprice">Book Price:</label>&nbsp; &nbsp;
          <input type="number" id="bookprice" name="price" placeholder="Book Price" value={formdetails.price} onChange={handlechange} required/>
        </div>
        <div class="form-group">
          <label for="bookauthor">Book Author:</label>&nbsp; &nbsp;
          <input type="text" id="bookauthor" name="author" placeholder="Book Author" value={formdetails.author} onChange={handlechange} required/>
        </div>
        <button type="submit" class="btn btn-primary" id="btn" name="btn">Add New Book</button>
      </form>
    </div>
   
  )
}
