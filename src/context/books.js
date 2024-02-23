import {createContext, useState} from 'react';
import axios from 'axios';

const BooksContext=createContext();
function Provider({children}){

    const [books,setBooks]=useState([]);

    const fectBooks = async()=>{
            const response =await axios.get("http://localhost:3001/books");
            setBooks(response.data);
    }
    
    const createBook=async(title)=>{
        const response =  await axios.post("http://localhost:3001/books",{
          title:title
        })  
        const updatedBooks=[
          ...books,
           response.data ];
           setBooks(updatedBooks); };

           const deleteBookById= async(id)=>{
            await axios.delete(`http://localhost:3001/books/${id}`)
            const updatedBooks=books.filter((book)=>{
                return book.id !== id
            })
            setBooks(updatedBooks);
        }
        const editBookByid= async(id,newTitle)=>{
            const response=    await axios.put(`http://localhost:3001/books/${id}`,{
                    title:newTitle
                });
            
                const updatedBooks=books.map((book)=>{
                    if(book.id===id){
                        return{...book,...response.data}
                    }else{
                        return book;
                    }
                })
        
                setBooks(updatedBooks);
            }

            const valuesToShare={
                books:books,
                editBookByid:editBookByid,
                createBook:createBook,
                deleteBookById:deleteBookById,
                fectBooks:fectBooks
            }

    
    return <BooksContext.Provider value={valuesToShare}>
                {children}
    </BooksContext.Provider>
}
export {Provider};
export default BooksContext;