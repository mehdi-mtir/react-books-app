import './App.css';
import { useEffect, useState } from 'react';
import BooksList from './books/BooksList';
import BooksAdd from './books/BooksAdd';
import BooksEdit from './books/BooksEdit';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import BooksDetails from './books/BooksDetails';
import {editBookService, addBookService, deleteBookService, getBooksService} from './books/BooksServices';

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(
    ()=>{
        const getData = async ()=>{
            const data = await getBooksService();
            setBooks(data);
        }
        getData();
    }
, [])

const deleteBook = async (id)=>{
  if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      const result = await deleteBookService(id);
      setBooks(books.filter(b=>b.id !== id))
  }
}

const addBook = async (book)=>{

  const data = await addBookService(book);
  setBooks([...books, data]);
  navigate("/books");

}

const editBook = async (book)=>{
  const data = await editBookService(book);
  setBooks(books.map(
    b=>b.id === book.id?book:b
  ));
  navigate("/books");

}

  return (
    <div className='container'>
      <h1>Application de gestion de livres :</h1>
      
      <Routes>
        <Route path='/' element={<Navigate to='/books' replace=''/> } />
        <Route path='/books' exact element={<BooksList books={books} deleteBookHandler={deleteBook} />} />
        <Route path='/books/add' exact element={<BooksAdd addBookHandler={addBook} />} />
        <Route path='/books/edit/:id' exact element={<BooksEdit books={books} editBookHandler={editBook} />} />
        <Route path='/books/:id' exact element={<BooksDetails books={books} /> } />
      </Routes>

    </div>
  );
}

export default App;
