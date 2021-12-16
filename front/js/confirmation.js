
function commandeFinale () {
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get("orderId");
  
  const numeroCommande = document.getElementById("orderId");
  numeroCommande.innerText = localStorage.getItem("orderId");
  localStorage.clear();
}
commandeFinale();