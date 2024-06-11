

export async function addBookService(book){

    //if online
    const requestOptions = {
        method : "POST",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(book)
    };
  
    const res = await fetch("http://localhost:3000/books/", requestOptions);
    const data = await res.json();

    //else faire l'ajout en local et enregistrer l'action pour synchronisation

    return data;

}

export async function editBookService(book){
    
    //if online
    const requestOptions = {
        method : "PUT",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(book)
    };
  
    const res = await fetch("http://localhost:3000/books/"+book.id, requestOptions);
    const data = await res.json();
    //else faire la modification en local et enregister l'actions pour synchronisation

    return data;

}

export async function getBooksService(){
    let data;
    const init = [];

    if(navigator.onLine){
        //synchroniser les modifications réalisées en offline (si elles existent)
        const response = await fetch("http://localhost:3000/books");
        data = await response.json();
    }
    else{
        //activer l'enregistrement des modifications réalisées en offline pour pouvoir les synchroniser avec le serveur
        data = window.localStorage.getItem("books")?JSON.parse(window.localStorage.getItem("books")):init
    }

    return data;

}

export async function deleteBookService(id){

    const requestOptions = {
        method : "DELETE"
    };

    //if online {
    const res = await fetch("http://localhost:3000/books/"+id, requestOptions);
    const result = await res.json();
    //}else faire la suppression en local et enregister l'action pour une synchronisation ultérieure

    return result;

}