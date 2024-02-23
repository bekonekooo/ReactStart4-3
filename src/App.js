import { useState,useEffect,useContext} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import BooksContext from "./context/books";



function App(){

  const {fectBooks} =  useContext(BooksContext);
   
    useEffect(()=>{
        fectBooks();},
    []);


  

//             const updatedBooks=[
//                 ...books,{id:Math.round(Math.random()*1000),title}
//             ]
// setBooks(updatedBooks);
   

    // const deleteBookById=(id)=>{
    //     const updatedBooks=books.filter((book)=>{
    //         return book.id !== id
    //     })
    //     setBooks(updatedBooks);
    // }


    // const editBookByiD=(id,newTitle)=>{
    //     const updatedBooks=books.map((book)=>{
    //         if(book.id===id){
    //             return{...book,title:newTitle}
    //         }else{
    //             return book;
    //         }
    //     })
    //     setBooks(updatedBooks);
    // }

   
    // const updatedBooks=books.map((book)=>{
        //     if(book.id===id){
        //         return{...book,title:newTitle}
        //     }else{
        //         return book;
        //     }
        // })

    return <div className="app">BOOK LIST
        <BookList ></BookList>
        <BookCreate ></BookCreate>
       
    </div>;
}
export default App;