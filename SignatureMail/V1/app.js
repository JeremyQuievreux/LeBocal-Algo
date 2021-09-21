//Les Variables des input et button
let inputNameElt = document.getElementById("name");
let inputLastnameElt = document.getElementById("lastname");
let inputPosteElt = document.getElementById("poste");
let inputGsmElt = document.getElementById("gsm");
let inputMailElt = document.getElementById("mail");
let inputPostalElt = document.getElementById("postal");
let inputPhoneElt = document.getElementById("phone");
//Variable div
let divResult = document.querySelector(".result-interne");

//Variable boutton valider
let btnValider = document.querySelector(".btnValider");

//Fonctions
//Fonction création d'element p
function createElementP(contenu, style){
    let pElt = document.createElement("p");
    pElt.classList.add(style);
    pElt.innerText = contenu;
    return pElt;
}

//Event sur le btn valider
btnValider.addEventListener("click", () => {
    divResult.innerHTML = "";
    let line1 = createElementP("" + inputNameElt.value + " " + inputLastnameElt.value + "" , "line1");
    divResult.appendChild(line1);
    let line2 = createElementP(inputPosteElt.value, "line2");
    divResult.appendChild(line2);
    let line3 = createElementP("" + inputGsmElt.value + " / " + inputPhoneElt.value + "", "line3");
    divResult.appendChild(line3);
    let line4 = createElementP(inputMailElt.value, "line4");
    divResult.appendChild(line4);
    let line5 = createElementP(inputPostalElt.value, "line5");
    divResult.appendChild(line5);

})