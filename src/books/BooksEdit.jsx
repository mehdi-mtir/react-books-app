import { useEffect, useState } from "react";

function BooksEdit(props){
    const [book, setBook] = useState(props.book);
    useEffect(
        ()=> {
            console.log("Use Effect : " + JSON.stringify(props.book));
            setBook(props.book);
        }
    , [props]);


    const inputChangeHandler = ({target})=>{
        setBook({...book, [target.name] : target.value })
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
    
    <button type="button" className="btn btn-primary" onClick={()=>{props.editBookHandler(book);}}>Valider</button>
  </form>
  </>
}

export default BooksEdit;