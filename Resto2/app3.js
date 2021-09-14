let age = window.prompt("Bienvenue sur l'interface Resto'Commande \nQuelle est votre age ?");

let budget = window.prompt("De combien voulez vous créditer votre compte ?")

let choix ;

do {
    choix = parseInt(window.prompt(`Que voulez vous commander ?
    Credit dispo : ${budget} €
    1 - Boisson non-alcoolisée : 5€
    2 - Boisson Alcoolisée : 8€
    3 - Plat du jour : 20€
    0 - Rien et quitter`));

    while (choix != 1 && choix != 2 && choix != 3 && choix != 0) {
                choix = parseInt(window.prompt(`Nous n'avons pas compris votre demande !
            Credit dispo : ${budget} €
            1 - Boisson non-alcoolisée : 5€
            2 - Boisson Alcoolisée : 8€
            3 - Plat du jour : 20€
            0 - Rien et quitter`));
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
         
    
} while (choix != 0 && budget >= 5);

if (budget < 5) {
    alert(`Votre budget est insuffisant pour continuer !\nIl vous reste ${budget} €`);
}
alert("Merci et à bientot");