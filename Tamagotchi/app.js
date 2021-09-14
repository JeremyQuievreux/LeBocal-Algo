let energie = 10;
let faim = 0;
let joie = 5;

function jouer(){
    energie -= 2;
    faim += 1;
    joie += 1;
}
function donnerManger() {
    energie += 2;
    faim -= 1;
    joie -= 1;
}
  
let choix ;

 while (energie >= 0 && faim < 5 && joie >= 0) {

    choix = parseInt(prompt(`Que voulez vous faire ?
    1 - Jouer (-2 EN / +1 FAIM / +1 JOIE)
    2 - Nourrir (+2 EN /-1 FAIM / -1 JOIE)
    Stats Actuelles : ${energie} : EN / ${faim} : FAIM / ${joie} : JOIE`));

    if (choix == 1) {
        jouer();
    } else if (choix == 2) {
        donnerManger();
    }
 }

alert("Il est mort");