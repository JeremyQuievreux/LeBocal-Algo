let catInputElt = document.getElementById("categorie");
let specLabElt = document.getElementById("special-label");
let specInputElt = document.getElementById("special-input");

catInputElt.addEventListener("change", () => {
    if (catInputElt.value == "perso") {
        specLabElt.innerText = "Adresse Postal : ";
    } else {
        specLabElt.innerText = "Nom Entreprise : ";
    }    
})

