// Pour sélectionner un élément
let element1 = document.body                   // Récupère l'élément body
let element2 = document.getElementById('demo') // Sélectionne l'élément avec l'id demo
let element3 = document.querySelector('.demo') // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
document.getElementsByClassName('demo')             // Sélectionne les éléments avec la class démo
document.getElementsByTagName('p')                  // Sélectionne les éléments <p>
var elements = document.querySelectorAll('.demo')   // Sélectionne les éléments correspondant au sélecteur CSS 

// Ces méthodes renvoient un objet NodeList enumerable 

// On peut parcourir cette liste d'éléments comme un tableau

for (let i = 0; i < elements.length; ++i) {
    let element = elements[i] // objet de type Element
}