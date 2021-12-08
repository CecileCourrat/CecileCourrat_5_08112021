
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
else {
    for(let i = 0; i < ajoutProduitStorage.length; i++){
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
  let length = articleQuantite.length;
  let articleTotal = 0;

  for(let i = 0; i < length; i++) {
    articleTotal +=articleQuantite[i].valueAsNumber;
  }
  let articleTotalQuantite = document.getElementById("totalQuantity");
  articleTotalQuantite.innerHTML = articleTotal;
//Total des prix
  let prixTotal = 0;

  for(let i = 0; i < length; i++) {
    prixTotal += articleQuantite[i].valueAsNumber * ajoutProduitStorage[i].prix;
  }
  let prixTotalArticles = document.getElementById("totalPrice");
  prixTotalArticles.innerHTML = prixTotal;
}
totalPanier();

//Fonction pour supprimer un produit
function supprimerProduit() {
  const suppressionArticle = document.querySelectorAll(".deleteItem");
  for (let i = 0; i < suppressionArticle.length; i++) {
    suppressionArticle[i].addEventListener("click", (event) => {
      event.preventDefault();
      ajoutProduitStorage.splice(i, 1);
      localStorage.setItem("articles", JSON.stringify(ajoutProduitStorage));
      alert("votre produit a été supprimé");
      location.reload();
    });
  }
}
supprimerProduit();

//Fonction pour vider entierement le panier
function supprimerPanier() {
 const viderPanier = document.getElementById("cart__delete");
 viderPanier.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  alert("Le panier a été supprimé");
  location.href = "index.html";
});
}
supprimerPanier();

//Fonction pour changer la quantité d'un article
function changerQuantite() {
  let selectionQuantite = document.querySelectorAll(".itemQuantity");
    for(let i = 0; i < selectionQuantite.length; i ++) {
      selectionQuantite[i].addEventListener("change", (event) => {
        event.preventDefault();
        let articleQuantite = event.target.value;
        let nouveauPanier = {
          id: ajoutProduitStorage[i].id,
          quantité: articleQuantite,
          couleur: ajoutProduitStorage[i].couleur,
          img: ajoutProduitStorage[i].img,
          alt: ajoutProduitStorage[i].alt,
          nom: ajoutProduitStorage[i].nom,
          prix: ajoutProduitStorage[i].prix
        };
        ajoutProduitStorage[i] = nouveauPanier;
        localStorage.clear();
        localStorage.setItem("articles", JSON.stringify(ajoutProduitStorage));
        location.reload();
      }); 
  }
}
changerQuantite();

//*************Formulaire***********************

let formulaire = document.querySelector(".cart__order__form");
 
//Vérification des données saisies par l'utilisateur

function prenom () {
formulaire.firstName.addEventListener("input", function () {
  prenomValide(this);
});

const prenomValide = function (inputPrenom) {
  let prenomRegex = new RegExp("^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,}$", "g");
  let testPrenom = prenomRegex.test(inputPrenom.value);
  if(testPrenom) {
    inputPrenom.nextElementSibling.innerHTML = "";
    return true;
  }
  else {
    inputPrenom.nextElementSibling.innerHTML = "Prénom non valide";
    return false;
  }
}
};
prenom();


function nom () {
  formulaire.lastName.addEventListener("input", function () {
    nomValide(this);
  });
  
  const nomValide = function (inputNom) {
    let nomRegex = new RegExp("^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s_ ]{2,}$", "g");
    let testNom = nomRegex.test(inputNom.value);
    if(testNom) {
      inputNom.nextElementSibling.innerHTML = "";
      return true;
    }
    else {
      inputNom.nextElementSibling.innerHTML = "Nom non valide";
      return false;
    }
  }
  };
nom();

function adresse () {
    formulaire.address.addEventListener("input", function () {
      adresseValide(this);
    });
    
    const adresseValide = function (inputAdresse) {
      let adresseRegex = new RegExp("^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s_ ]{3,}$", "g");
      let testAdresse = adresseRegex.test(inputAdresse.value);
      if(testAdresse) {
        inputAdresse.nextElementSibling.innerHTML = "";
        return true;
      }
      else {
        inputAdresse.nextElementSibling.innerHTML = "Adresse non valide";
        return false;
      }
    }
    };
adresse();

function ville () {
  formulaire.city.addEventListener("input", function () {
    villeValide(this);
  });
  
  const villeValide = function (inputVille) {
    let villeRegex = new RegExp("^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s_ ]{3,}$", "g");
    let testVille = villeRegex.test(inputVille.value);
    if(testVille) {
      inputVille.nextElementSibling.innerHTML = "";
      return true;
    }
    else {
      inputVille.nextElementSibling.innerHTML = "Ville non valide";
      return false;
    }
  }
  };
ville();

function email () {
  formulaire.email.addEventListener("input", function() {
    emailValide(this);
 });

 const emailValide = function (inputEmail) {
    let emailRegex = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g" );
    let testEmail = emailRegex.test(inputEmail.value);
  if(testEmail) {
    inputEmail.nextElementSibling.innerHTML ="";
    return true;
  }
  else {
    inputEmail.nextElementSibling.innerHTML = "Adresse email non valide";
   }
 };
}
email();

