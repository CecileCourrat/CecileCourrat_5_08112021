
//Récupération du local storage
let ajoutProduitStorage = JSON.parse(localStorage.getItem("articles"));

const affichagePanier = document.getElementById("cart__items");
console.log(affichagePanier);

if(ajoutProduitStorage === null){
alert("le panier est vide");
}
else{
    for(i = 0; i < ajoutProduitStorage.length;i++){
       let affichageProduits = `
        <article class="cart__item" data-id="${ajoutProduitStorage[i].id}">
                <div class="cart__item__img">
                  <img src="${ajoutProduitStorage[i].img}" alt="${ajoutProduitStorage[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${ajoutProduitStorage[i].nom}</h2>
                    <p >${ajoutProduitStorage[i].couleur}</p>
                    <p>${ajoutProduitStorage[i].prix}€</p>
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
