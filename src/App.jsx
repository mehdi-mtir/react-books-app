import './App.css';
import { useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';

function App() {
  const [action, setAction] = useState("");
  const [books, setBooks] = useState(
    [
      {id : 1, title : "Slight Edge", author : "Jeff Olsen"},
      {id : 2, title : "Atmic Habits", author : "James Clear"},
      {id : 3, title : "Power of habits", author : "Charles Duhigg"}
    ]
  );

  const showAddForm = ()=>{
    setAction("add");
  }

  const addBook = (book)=>{
    book.id = books[books.length - 1].id + 1;
    setBooks([...books, book]);
    setAction("");
  }

  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      <button className='btn btn-success' onClick={showAddForm}>Ajouter un livre</button>
      <BooksList books={books} />
      {action === "add" && <BooksAdd addBookHandler={addBook} />}
    </div>
  );
}

export default App;
