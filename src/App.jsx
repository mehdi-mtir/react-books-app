import './App.css';
import { useState } from 'react';
import BooksList from './books/BooksList';

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

      <BooksList books={books} />
    </div>
  );
}

export default App;
