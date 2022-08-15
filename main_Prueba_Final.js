const urlApiDogRandom = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=cc71eab9-9843-4eb1-9628-19e86b00ae43';
const urlApiDogFavorite = 'https://api.thedogapi.com/v1/images/favourites?api_key=cc71eab9-9843-4eb1-9628-19e86b00ae43';
const getDogsRandom = async () =>{
    const response = await fetch(urlApiDogRandom);
    const data = await response.json();
    const array = [];
    const div = document.querySelector('#getDogRandom__dogs');
    data.forEach(dog => {
        //creando mi imagen
        const img = document.createElement('img');
        img.src = dog.url;
        img.width = 200;
        img.height = 200;
        array.push(img);
        //crear boton
        const button = document.createElement('button');
        button.innerHTML= "Agregar a favoritos";
        array.push(button);
        button.onclick = () => {
            addDogsFavorite(dog.id);
        }
    });
    div.append(...array);
    console.log(data[0].id);
}

// funcion para los perros favoritos
const getDogsFavorite = async () =>{
    const response = await fetch(urlApiDogFavorite);
    const data = await response.json();
    const div = document.querySelector('#getDogFavorite__cats');
    const array = [];
    data.map(dogs => {
        const img = document.createElement('img');
        img.src = dogs.image.url;
        img.setAttribute('alt', dogs.user_id);
        img.width = 200;
        img.height = 200;
        array.push(img);
        //crear boton
        const button = document.createElement('button');
        button.innerHTML= "Eliminar de favoritos";
        button.onclick = () => {

        }
        array.push(button);
    });
    div.append(...array);
    console.log(data);
}

//funcion para agregar los perros favoritos 
const addDogsFavorite = async (id) =>{
    console.log(id);
    const response = await fetch(urlApiDogFavorite,{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify( {
        id:id
    }),
});
console.log("Save");
console.log(response);
}


getDogsFavorite();