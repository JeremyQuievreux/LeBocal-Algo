let energie = 10;
let faim = 0;
let joie = 5;
let xp = 100;
let lvl = 0;

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
function combattre(){
    energie -= 3;
    faim += 1;
    joie -= 1;
}
  
let choix ;

 while (energie >= 0 && faim < 5 && joie >= 0) {

    lvl = Math.trunc(xp / 100);

    choix = parseInt(prompt(`Que voulez vous faire ?
    1 - Jouer (-2 EN / +1 FAIM / +1 JOIE)
    2 - Nourrir (+2 EN /-1 FAIM / -1 JOIE)
    3 - Combattre (-3 EN / +1 FAIM / -1 JOIE)
    Stats Actuelles : ${energie} : EN / ${faim} : FAIM / ${joie} : JOIE
    xp = ${xp - (lvl * 100)} | Niveau : ${lvl}`));

    if (choix == 1) {
        jouer();
        xp += 10 ;
    } else if (choix == 2) {
        donnerManger();
        xp += 10 ;
    } else if (choix == 3) {
        combattre();
        xp += 20;
    }
 }

alert("Il est mort");