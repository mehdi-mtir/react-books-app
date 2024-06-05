
function BooksList(props){
    return <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titre</th>
        <th scope="col">Auteur</th>
        <th scope="col">Editer</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {
            props.books.map(
                book=> <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td><button className="btn btn-primary" onClick={()=>props.showFormHandler("edit", book.id)}>Editer</button></td>
                <td><button className="btn btn-danger">Supprimer</button></td>
              </tr>
            )
        }
    </tbody>
    </table>
}

export default BooksList;