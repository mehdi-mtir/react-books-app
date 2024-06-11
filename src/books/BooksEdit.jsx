import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BooksEdit(props){
    const {id} = useParams();
    const [book, setBook] = useState(props.books.find(b=>b.id === id));


    const inputChangeHandler = ({target})=>{
        setBook({...book, [target.name] : target.value })
    }


    return <>
    <h2>Editer le livre {book.title}</h2>
    <form >

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Titre</label>
      <input type="text" className="form-control" id="title" name="title" value={book.title} onChange={inputChangeHandler} />
    </div>

    <div className="mb-3">
      <label htmlFor="author" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={inputChangeHandler} />
    </div>

    <div className="mb-3">
      <label htmlFor="price" className="form-label">Prix</label>
      <input type="text" className="form-control" id="price" name="price" value={book.price} onChange={inputChangeHandler} />
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" name="description" value={book.description} onChange={inputChangeHandler} ></textarea>
    </div>

    
    
    <button type="button" className="btn btn-primary" onClick={()=>{props.editBookHandler(book);}}>Valider</button>
  </form>
  </>
}

export default BooksEdit;