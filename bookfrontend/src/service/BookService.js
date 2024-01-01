class BookService{
    constructor(){
        this.bookarr=[{id:1, title:"Reva", price:250, author:"Rakesh Sharma"}, {id:2, title:"Can love happen twice??", price:200, author:"Durjoy Datta"},{id:3, title:"Krushnayan", price:300, author:"Kajal Oza"}];
    }

    getAllBooks(){
        return this.bookarr;
    }

    insertBook(book){
        this.bookarr.push(book);
    }

    getBook(bid){
        return this.bookarr.find(b=>b.id==parseInt(bid));
    }

    deleteBook(bid){
        let pos = this.bookarr.findIndex(b=>b.id===bid);
        this.bookarr.splice(pos, 1);
    }

    updateBook(book){
        let pos = this.bookarr.findIndex(b => b.id === book.id);
        this.bookarr.splice(pos, 1, {...book});
    }
}

export default new BookService();