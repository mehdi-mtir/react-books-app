function BooksAdd(){
    return <>
    <h2>Ajouter un livre</h2>
    <form>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Titre</label>
      <input type="text" className="form-control" id="title" name="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="author" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="author" name="author" />
    </div>
    
    <button type="submit" className="btn btn-primary">Valider</button>
  </form>
  </>
}

export default BooksAdd;