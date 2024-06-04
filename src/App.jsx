import './App.css';
import { useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';

function App() {
  
  const [books, setBooks] = useState(
    [
      {id : 1, title : "Slight Edge", author : "Jeff Olsen"},
      {id : 2, title : "Atmic Habits", author : "James Clear"},
      {id : 3, title : "Power of habits", author : "Charles Duhigg"}
    ]
  );

  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      <button className='btn btn-success'>Ajouter un livre</button>
      <BooksList books={books} />
      <BooksAdd />
    </div>
  );
}

export default App;
