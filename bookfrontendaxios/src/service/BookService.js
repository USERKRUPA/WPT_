import axios from 'axios';
const baseURL = "http://localhost:9090/books"
class BookService{
    constructor(){
        this.bookarr=[{id:1, title:"Reva", price:250, author:"Rakesh Sharma"}, {id:2, title:"Can love happen twice??", price:200, author:"Durjoy Datta"},{id:3, title:"Krushnayan", price:300, author:"Kajal Oza"}];
    }

    getAllBooks(){
        //return this.bookarr;
        console.log("in service get");
        return axios.get(baseURL);
    }

    insertBook(book){
       // this.bookarr.push(book);
       return axios.post(baseURL, book);
    }

    getBook(bid){
        //return this.bookarr.find(b=>b.id==parseInt(bid));
        console.log("in service get book", bid);
        return axios.get(baseURL + "/"+ bid);
    }

    removeBook(bid){
        //let pos = this.bookarr.findIndex(b=>b.id===bid);
        //this.bookarr.splice(pos, 1);
        return axios.delete(baseURL+"/"+bid);
    }

    updateBook(book){
        //let pos = this.bookarr.findIndex(b => b.id === book.id);
        //this.bookarr.splice(pos, 1, {...book});
        return axios.put(baseURL+"/"+book.id, book);
    }
}

export default new BookService();