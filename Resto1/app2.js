let age = window.prompt("Quelle est votre age ?");

let credit = window.prompt("De combien voulez vous créditer votre compte ?")

console.log("Carte :");
console.log("1 - Boisson non-alcoolisé : 5€");
console.log("2 - Boisson alcoolisé : 8€");
console.log("3 - Plat : 20€");

let choix = window.prompt("Faite votre choix :")

switch (choix) {
    case "1":
        if (credit >= 5) {
            credit = credit - 5
            console.clear()
            console.log("Commande acceptée");
            console.log("Bon appetit");
        } else {
            console.clear()
            console.log(" Commande refusée, crédit insuffisant");
        }        
        break;
    case "2":
        if (age < 18) {
            console.clear()
            console.log("Commande refusée, vous n'avez pas l'age légal");
        } else if (credit < 8) {
            console.clear()
            console.log("Commande refusée, vous n'avez pas assez de credit");
        } else {
            credit = credit - 18
            console.clear()
            console.log("Commande acceptée");
            console.log("Bon appetit");
        }
        break;
    case "3":
        if (credit >= 20) {
            credit = credit - 20
            console.clear()
            console.log("Commande acceptée");
            console.log("Bon appetit");
        } else {
            console.clear()
            console.log("Commande refusée, vous n'avez pas asser de crédit")
        }
        break;
    default:
        console.clear();
        console.log("Nous n'avons compris votre demande"); 
        break;
}

console.log("Vous avez " + credit + " € sur votre compte.");
