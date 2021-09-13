///SWITCH + alert ////
let age = window.prompt("Bienvenue sur l'interface Resto'Commande \nQuelle est votre age ?");

let credit = window.prompt("De combien voulez vous créditer votre compte ?")

let choix = window.prompt("Carte : \n1 - Boisson non-alcoolisée : 5€ \n2 - Boisson alcoolisée : 8€ \n3 - Plat : 20€ \nQue voulez vous ?")


switch (choix) {
    case "1":
        if (credit >= 5) {
            credit = credit - 5
            alert("Commande acceptée ! \nBon appetit");            
        } else {
            alert("Commande refusée ! \nCrédit insuffisant");
        }        
        break;
    case "2":
        if (age < 18) {
            alert("Commande refusée ! \nVous n'avez pas l'age légal");
        } else if (credit < 8) {
            alert("Commande refusée ! \nVous n'avez pas assez de credit");
        } else {
            credit = credit - 18
            alert("Commande acceptée ! \nBon appetit");
        }
        break;
    case "3":
        if (credit >= 20) {
            credit = credit - 20
            alert("Commande acceptée ! \nBon appetit");
        } else {
            alert("Commande refusée! \nVous n'avez pas asser de crédit");
        }
        break;
    default:
        alert("Nous n'avons compris pas votre demande");  
        break;
}
alert("Vous avez " + credit + " € sur votre compte.");

