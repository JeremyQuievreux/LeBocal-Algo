
let line_1 = "Que voulez vous commander ? \n";
let line_2 = "";
let line_3 = "";
let line_4 = "";
let line_5 = "";
let line_6 = "0 - Rien et Quitter";

function afficherMenu (budget){
    line_2 = `Credit dispo : ${budget} €\n`;
    if (budget >= 5) {
        line_3 = '1 - Boisson Soft : 5€ \n';
    }
    if (budget >= 8) {
        line_4 = '2 - Boisson Alcoolisée : 8€ \n';
    }
    if (budget >= 20) {
        line_5 = '3 - Plat du Jour : 20€ \n';
    }
}

let age = window.prompt("Bienvenue sur l'interface Resto'Commande \nQuelle est votre age ?");

let budget = window.prompt("De combien voulez vous créditer votre compte ?");

let choix 

while (choix != 0 && budget >= 5) {
    afficherMenu(budget);
    
    choix = window.prompt(line_1 + line_2 + line_3 + line_4 + line_5 + line_6);

    if (choix == 1) {
        if (budget >= 5) {
            budget = budget - 5
            alert(`Commande acceptée ! \n - 5 € de votre compte \nIl vous reste ${budget} €`);
        } else {
            alert(" Commande refusée ! Crédit insuffisant");
        }
    }
    if (choix == 2) {
        if (age < 18) {
            alert(`Commande refusée !\nVous n'avez pas l\'age légal ! \nRevenez dans ${18 - age} ans ;)`);
        } else if (budget < 8){
            alert(`Commande refusée !\nVous n'avez pas assez de credit !`);
        } else {
            budget = budget - 8
            alert(`Commande acceptée ! \n - 8 € de votre compte \nIl vous reste ${budget} €`);
        }
    }
    if (choix == 3) {
        if (budget >= 20) {
            budget = budget - 20
            alert(`Commande acceptée ! \n - 20 € de votre compte \nIl vous reste ${budget} €`);
        } else {
            alert(`Commande refusée ! \nVous n'avez pas asser de crédit !`);
        }    
    }
}
if (budget < 5) {
    alert(`Votre budget est insuffisant pour continuer !\nIl vous reste ${budget} €`);
}
alert("Merci et à bientot");