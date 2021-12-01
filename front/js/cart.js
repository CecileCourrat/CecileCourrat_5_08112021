
//Récupération du local storage
let ajoutProduitStorage = JSON.parse(localStorage.getItem("articles"));

//Affichage des produits dans le panier
const affichagePanier = document.getElementById("cart__items");
console.log(affichagePanier);

//le panier est vide
if(ajoutProduitStorage === null){
alert("le panier est vide");
}
//Boucle pour parcourir les élements dans le local storage
else{
    for(let i = 0; i < ajoutProduitStorage.length;i++){
       let prixArticle = 
       ajoutProduitStorage[i].prix *
       ajoutProduitStorage[i].quantité;
       let affichageProduits = `
        <article class="cart__item" data-id="${ajoutProduitStorage[i].id}">
                <div class="cart__item__img">
                  <img src="${ajoutProduitStorage[i].img}" alt="${ajoutProduitStorage[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${ajoutProduitStorage[i].nom}</h2>
                    <p>${ajoutProduitStorage[i].couleur}</p>
                    <p>${prixArticle}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${ajoutProduitStorage[i].quantité}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
        `;
       document.getElementById("cart__items").innerHTML += affichageProduits;
    }
}

function totalPanier() {
//Total des articles 
  let articleQuantite = document.getElementsByClassName("itemQuantity");
  let length = articleQuantite.length,
  articleTotal = 0;

  for(let j = 0; j < length; ++j) {
    articleTotal +=articleQuantite[j].valueAsNumber;
  }
  let articleTotalQuantite = document.getElementById("totalQuantity");
  articleTotalQuantite.innerHTML = articleTotal;
//Total des prix
  prixTotal = 0;

  for(let j = 0; j < length; ++j) {
    prixTotal += articleQuantite[j].valueAsNumber * ajoutProduitStorage[j].prix;
  }
  let prixTotalArticles = document.getElementById("totalPrice");
  prixTotalArticles.innerHTML = prixTotal;
}
totalPanier();