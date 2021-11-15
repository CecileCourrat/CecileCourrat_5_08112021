
fetch("http://localhost:3000/api/products")
 .then(response => response.json())
 .then(data => {
    console.log(data);
    let affichage = "";
    for(let produit of data) {
        affichage += `<a href="./product.html?id=${produit._id}">
                       <article>
                        <img src="${produit.imageUrl}" alt="${produit.altTxt}">     
                        <h3 class="productName">${produit.name}</h3>
                        <p class="productDescription">${produit.description}</p>
                       </article>
                      </a>`;
    }
 document.getElementById("items").innerHTML = affichage;
})
 .catch(erreur => alert("Une erreur est survenue"));






  

   
   



