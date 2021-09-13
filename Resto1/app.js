let age = window.prompt("Bienvenue sur l'interface Resto'Commande \nQuelle est votre age ?");

let credit = window.prompt("De combien voulez vous créditer votre compte ?")

console.log("Carte :");
console.log("1 - Boisson non-alcoolisé : 5€");
console.log("2 - Boisson alcoolisé : 8€");
console.log("3 - Plat : 20€");

let choix = window.prompt("Faite votre choix :")

if (choix == 1) {
    if (credit >= 5) {
        credit = credit - 5
        console.clear()
        console.log("Commande acceptée");
        console.log("Bon appetit");
    } else {
        console.clear()
        console.log(" Commande refusée, crédit insuffisant");
    }
}

if (choix == 2) {
    if (age < 18) {
        console.clear()
        console.log("Commande refusée, vous n'avez pas l'age légal");
    } else if (credit < 8){
        console.clear()
        console.log("Commande refusée, vous n'avez pas assez de credit");
    } else {
        credit = credit - 18
        console.clear()
        console.log("Commande acceptée");
        console.log("Bon appetit");
    }
}

if (choix == 3) {
    if (credit >= 20) {
        credit = credit - 20
        console.clear()
        console.log("Commande acceptée");
        console.log("Bon appetit");
    } else {
        console.clear()
        console.log("Commande refusée, vous n'avez pas asser de crédit");
    }    
}

if (choix != 1 && choix != 2 && choix != 3) {
    console.clear();
    console.log("Nous n'avons compris pas votre demande");    
}

console.log("Vous avez " + credit + " € sur votre compte.");
