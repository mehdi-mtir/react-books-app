import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BooksList(props){
    const [books, setBooks] = useState([]);

    useEffect(
        ()=>{
            const getData = async ()=>{
                const response = await fetch("http://localhost:3000/books");
                const data = await response.json();

                setBooks(data);
            }
            getData();
        }
    , [])

    const deleteBook = async (id)=>{
        if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
            const requestOptions = {
                method : "DELETE"
            };

            try{
                const res = await fetch("http://localhost:3000/books/", requestOptions);
                const result = await res.json();
                setBooks(books.filter(b=>b.id !== id))
            }
            catch(error){
                console.log(error)
            }

        }
            //Supprimer les données sur le serveur
          //setBooks(books.filter(b=>b.id !== id));
    }

    return <>
    <Link className='btn btn-success' to="/books/add">Ajouter un livre</Link>
    
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titre</th>
        <th scope="col">Auteur</th>
        <th scope="col">Détails</th>
        <th scope="col">Editer</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {
            books.map(
                book=> <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                {/*<td><Link className="btn btn-info" to={"/books/" + book.id} /></td>*/}
                <td><Link className="btn btn-info" to={`/books/${book.id}`}>Voir détails </Link></td>
                <td><Link className="btn btn-primary" to={"/books/edit/"+book.id}>Editer</Link></td>
                <td><button className="btn btn-danger" onClick={()=>deleteBook(book.id)}>Supprimer</button></td>

              </tr>
            )
        }
    </tbody>
    </table>
    </>
}

export default BooksList;