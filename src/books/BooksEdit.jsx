import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BooksEdit(props){
    const {id} = useParams();
    const [book, setBook] = useState({title : "", author : "", description : "", price : 0});

    const navigate = useNavigate();

    useEffect(
        ()=>{
            const getData = async ()=>{
                const response = await fetch("http://localhost:3000/books/"+id);
                const data = await response.json();

                setBook(data);
            }
            getData();
        }
    , []);


    const inputChangeHandler = ({target})=>{
        setBook({...book, [target.name] : target.value })
    }

    const editBook = async ()=>{
        const requestOptions = {
            method : "PUT",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(book)
        };

        const res = await fetch("http://localhost:3000/books/"+id, requestOptions);
        //fetch("http://localhost:3000/books/"+id, requestOptions)
        
        navigate("/books");

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

    
    
    <button type="button" className="btn btn-primary" onClick={()=>{editBook();}}>Valider</button>
  </form>
  </>
}

export default BooksEdit;