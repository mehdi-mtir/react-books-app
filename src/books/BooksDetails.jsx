import { useState } from "react";
import { useParams } from "react-router-dom";

function BooksDetails(props){
    const {id} = useParams();
    const [book] = useState(props.books.find(b=>b.id === id));


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