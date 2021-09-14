https://lebocal.academy/

// selectionner logo bocal
let el1 = document.querySelector(".navbar-brand img");

// le supprimer
el1.remove();

//selectionner le titre dans la div principale
let el2 = document.querySelector(".home .container h1");

//remplacement du contenu
el2.innerHTML = "Undefined : C'est pas faux";

https://www.om.fr/fr/vivre-l-om

//selection de l'image en haut a gauche
let el3 = document.querySelector("#block-om-branding img");
//suppression
el3.remove();

let el4 = document.querySelector("#block-om-branding");

el4.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg' />";