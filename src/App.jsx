import './App.css';
import { useEffect, useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';
import BooksEdit from './books/BooksEdit';

function App() {
  const [action, setAction] = useState("");
  const [bookToEdit, setBookToEdit] = useState({});

  useEffect(
    ()=>{
      console.log("BookToEdit : " + JSON.stringify(bookToEdit))
      
    }
  )

  const [books, setBooks] = useState(
    [
      {id : 1, title : "Slight Edge", author : "Jeff Olsen"},
      {id : 2, title : "Atmic Habits", author : "James Clear"},
      {id : 3, title : "Power of habits", author : "Charles Duhigg"}
    ]
  );

  const showForm = (actionToDo, id)=>{
    setAction(actionToDo);
    if(id !== undefined){
      console.log(id);
      getBookToEdit(id);
    }
      
  }

  const getBookToEdit = (id)=>{
    setBookToEdit(books.find(book=>book.id === id));
  }


  const addBook = (book)=>{
    book.id = books[books.length - 1].id + 1;
    setBooks([...books, book]);
    setAction("");
  }

  const editBook = (book)=>{
    setBooks(books.map(
      b=>b.id === book.id?book:b
    ));
    setAction("");
  }

  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      <button className='btn btn-success' onClick={()=>showForm("add")}>Ajouter un livre</button>
      <BooksList books={books} showFormHandler={showForm} />
      {action === "add" && <BooksAdd addBookHandler={addBook} />}
      {action === "edit" && <BooksEdit editBookHandler={editBook} book={bookToEdit} />}
    </div>
  );
}

export default App;
