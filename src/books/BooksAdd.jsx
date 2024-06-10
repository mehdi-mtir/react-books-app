import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BooksAdd(props){
    const [book, setBook] = useState({title : "", author : "", description : "", price : 0});

    const navigate = useNavigate();

    /*const titleChangeHandler = (event)=>{
        setBook({...book, title : event.target.value});
    }

    const authorChangeHandler = (event)=>{
        setBook({...book, author : event.target.value});
    }*/

    const inputChangeHandler = ({target})=>{
        setBook({...book, [target.name] : target.value })
    }

    /*const addNewBook = ()=>{
        //event.preventDefault();
        //console.log("Ajout du livre");
        
    }*/

    const addBook = async ()=>{
        const requestOptions = {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(book)
        };

        const res = await fetch("http://localhost:3000/books/", requestOptions);

        navigate("/books");

    }


    return <>
    <h2>Ajouter un livre</h2>
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
    
    <button type="button" className="btn btn-primary" onClick={()=>{addBook();}}>Valider</button>
  </form>
  </>
}

export default BooksAdd;