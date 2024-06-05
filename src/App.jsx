import './App.css';
import { useEffect, useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';
import BooksEdit from './books/BooksEdit';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';

function App() {
  //const [action, setAction] = useState("");
  //const [bookToEdit, setBookToEdit] = useState({});
  const [books, setBooks] = useState(
    [
      {id : 1, title : "Slight Edge", author : "Jeff Olsen"},
      {id : 2, title : "Atmic Habits", author : "James Clear"},
      {id : 3, title : "Power of habits", author : "Charles Duhigg"}
    ]
  );

  /*useEffect(
    ()=>{
      console.log("BookToEdit : " + JSON.stringify(bookToEdit))
      
    }
  )*/

  const navigate = useNavigate();

  /*const showForm = (actionToDo, id)=>{
    setAction(actionToDo);
    if(id !== undefined){
      console.log(id);
      getBookToEdit(id);
    }
      
  }

  const getBookToEdit = (id)=>{
    setBookToEdit(books.find(book=>book.id === id));
  }*/


  const addBook = (book)=>{
    book.id = books.length>0?books[books.length - 1].id + 1:1;
    setBooks([...books, book]);
    navigate("/books");
  }

  const editBook = (book)=>{
    setBooks(books.map(
      b=>b.id === book.id?book:b
    ));
    navigate("/books");
  }

  const deleteBook = (id)=>{
    if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre?"))
      setBooks(books.filter(b=>b.id !== id));
  }

  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      
      <Routes>
        <Route path='/' element={<Navigate to='/books' replace=''/> } />
        <Route path='/books' exact element={<BooksList books={books} deleteBookHandler={deleteBook} />} />
        <Route path='/books/add' exact element={<BooksAdd addBookHandler={addBook} />} />
        <Route path='/books/edit/:id' exact element={<BooksEdit editBookHandler={editBook} books={books} />} />
      </Routes>

      {/*
      <BooksList books={books} showFormHandler={showForm} deleteBookHandler={deleteBook} />
      {action === "add" && <BooksAdd addBookHandler={addBook} />}
      {action === "edit" && <BooksEdit editBookHandler={editBook} book={bookToEdit} />}
      */}
    </div>
  );
}

export default App;
