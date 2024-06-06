import './App.css';
import { useEffect, useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';
import BooksEdit from './books/BooksEdit';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import BooksDetails from './books/BooksDetails';

function App() {
  //const [action, setAction] = useState("");
  //const [bookToEdit, setBookToEdit] = useState({});
  /*const [books, setBooks] = useState(
    [
      {id : 1, title : "Slight Edge", author : "Jeff Olsen", description: "description du livre Slight Edge", price : 20.50},
      {id : 2, title : "Atomic Habits", author : "James Clear", description: "description du livre Atmic Habits", price : 22.40},
      {id : 3, title : "Power of habits", author : "Charles Duhigg", description: "description du livre Power of habits", price : 27.20}
    ]
  );
  const init = [
    {id : 1, title : "Slight Edge", author : "Jeff Olsen", description: "description du livre Slight Edge", price : 20.50},
    {id : 2, title : "Atomic Habits", author : "James Clear", description: "description du livre Atmic Habits", price : 22.40},
    {id : 3, title : "Power of habits", author : "Charles Duhigg", description: "description du livre Power of habits", price : 27.20}
  ];

  const [books, setBooks] = useState(
    window.localStorage.getItem("books")?JSON.parse(window.localStorage.getItem("books")):init
  );

  useEffect(
    ()=>{
      window.localStorage.setItem("books", JSON.stringify(books))
    }
  , [books]);

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
  }


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
*/
  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      
      <Routes>
        <Route path='/' element={<Navigate to='/books' replace=''/> } />
        <Route path='/books' exact element={<BooksList />} />
        <Route path='/books/add' exact element={<BooksAdd />} />
        <Route path='/books/edit/:id' exact element={<BooksEdit />} />
        <Route path='/books/:id' exact element={<BooksDetails /> } />
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
