import { useState } from "react";
import BookEdit from "./BookEdit";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookShow({book}){

    const [showEdit,setShowEdit]=useState(false);
    const {deleteBookById,editBookByid}=useContext(BooksContext);

    const handleClickDelete=()=>{
        deleteBookById(book.id);
    }
    const handleClickEdit=()=>{
        setShowEdit(!showEdit)
    }
     const handleSubmit =()=>{
        setShowEdit(false);
       
     }

    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit onSubmit={handleSubmit}  book={book}></BookEdit>
    }

    return <div className="book-show">
  <img 
  alt="books"
  src="https://picsum.photos/300/200"/>
       <div > {content}</div>
       <div className="actions">
        <button className="delete" onClick={handleClickDelete}>Delete</button>
        <button className="edit" onClick={handleClickEdit}>Edit</button>
       </div>
    </div>
}
export default BookShow;