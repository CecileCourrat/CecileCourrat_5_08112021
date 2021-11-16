
//Récupération des paramètres d'URL
const url = new URL(window.location.href);
//Récupération de l'id du produit
const requeteId = url.searchParams.get("id");
console.log(requeteId);


//Récupération des détails du produit depuis l'API
    fetch(`http://localhost:3000/api/products/${requeteId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
//Ajout des détails dans la page produit
        function ajoutProduit() {
          const image = document.querySelector(".item__img").innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">` ;
          const titre =  document.getElementById('title').innerHTML = `<h1 id="title">${data.name}</h1>`;
          const prix = document.getElementById('price').innerHTML = `<span id="price">${data.price}</span>`;
          const description = document.getElementById('description').innerHTML = `<p id="description">${data.description}</p>`;
          const couleur = document.getElementById('colors');
        }
        ajoutProduit();
    });
    
  