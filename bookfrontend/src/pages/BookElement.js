import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import BookService from '../service/BookService';

export default function BookElement() {
  const [book, setBook] = useState({id:"",title:"",price:"",author:""});
  const params = useParams(); //to access the id of book from parent table

  useEffect(()=>{
    let bk = BookService.getBook(params.id);
    setBook(bk);
  },[params.id]);

  return (
    <div>
      <div className="card">
  <div className="card-header">
    Book Detail
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Id: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Price: {book.price}</p>
      <p>Author: {book.author}</p>
    </blockquote>
  </div>
</div>
    </div>
  )
}
