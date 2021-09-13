window.alert("Bienvenue sur l'interface Resto'Commande");

let age = window.prompt("Quelle est votre age ?");

let budget = window.prompt("De combien voulez vous créditer votre compte ?")

let choix = 0;

while (choix != 4 && budget >= 5) {

    console.log("Carte :");
    console.log("1 - Boisson non-alcoolisé : 5€");
    console.log("2 - Boisson alcoolisé : 8€");
    console.log("3 - Plat : 20€");  
    console.log("4 - Je ne souhaite plus commander"); 

    choix = window.prompt("Faite votre choix :")

    if (choix == 1) {
        if (budget >= 5) {
            budget = budget - 5
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
        } else if (budget < 8){
            console.clear()
            console.log("Commande refusée, vous n'avez pas assez de credit");
        } else {
            budget = budget - 18
            console.clear()
            console.log("Commande acceptée");
            console.log("Bon appetit");
        }
    }
    if (choix == 3) {
        if (budget >= 20) {
            budget = budget - 20
            console.clear()
            console.log("Commande acceptée");
            console.log("Bon appetit");
        } else {
            console.clear()
            console.log("Commande refusée, vous n'avez pas asser de crédit");
        }    
    }
}
if (budget < 5) {
    window.alert("Votre budget est insuffisant pour continuer");
}

console.log("Merci et à bientot");






















if (choix != 1 && choix != 2 && choix != 3) {
    console.clear();
    console.log("Nous n'avons compris pas votre demande");    
}

console.log("Vous avez " + credit + " € sur votre compte.");
