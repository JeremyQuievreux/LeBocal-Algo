
//fonction pour completer le menu par concatenation et return
function afficherMenu (budget, erreur_saisie){
    //menu vide
    let fullMenu =""
    //les differents briques
    let menu_ligne_0 = "Nous n'avous pas compris votre demande ! \n";
    let menu_ligne_1 = `Que voulez vous commander ? \n`;
    let menu_ligne_2 = `Credit dispo : ${budget} € \n`;
    let menu_ligne_3 = "1 - Boisson Soft : 5€ \n";
    let menu_ligne_4 = "2 - Boisson alcoolisée : 8 € \n";
    let menu_ligne_5 = "3 - Plat du jour : 20€ € \n";
    let menu_ligne_6 = "0 - Rien et Quitter \n";

    if (erreur_saisie) {
        fullMenu += menu_ligne_0
    }
    if (budget >= 5) {
        fullMenu += menu_ligne_1 + menu_ligne_2 + menu_ligne_3;
    }
    if (budget >= 8) {
        fullMenu += menu_ligne_4
    }
    if (budget >= 20) {
        fullMenu += menu_ligne_5
    }
    fullMenu += menu_ligne_6
    return fullMenu;
}
//Prompt pour savoir l'age
let age = window.prompt("Bienvenue sur l'interface Resto'Commande \nQuelle est votre age ?");
//Prompt pour savoir le budget
let budget = window.prompt("De combien voulez vous créditer votre compte ?");

let choix 

while (choix != 0 && budget >= 5) {
    choix = parseInt(window.prompt(afficherMenu(budget)));
    
    while (choix != 1 && choix != 2 && choix != 3 && choix != 0) {
        let erreur_saisie = true
        choix = parseInt(window.prompt(afficherMenu(budget, erreur_saisie)));            
    }  
        
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