import { useState } from "react";

function BooksAdd(props){
    const [book, setBook] = useState({title : "", author : ""});

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
    
    <button type="button" className="btn btn-primary" onClick={()=>{props.addBookHandler(book);}}>Valider</button>
  </form>
  </>
}

export default BooksAdd;