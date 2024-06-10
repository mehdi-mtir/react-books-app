import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BooksDetails(props){
    const {id} = useParams();
    const [book, setBook] = useState({title : "", author : "", description : "", price : 0});

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

    return <div>
        <h2>Détails du livre {book.title}</h2>
        <ul>
            <li>Id : {book.id}</li>
            <li>Titre : {book.title}</li>
            <li>Auteur : {book.author}</li>
            <li>Description : {book.description}</li>
            <li>Prix : {book.price}</li>
        </ul>
    </div>
}

export default BooksDetails;