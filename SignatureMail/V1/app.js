//Les Variables des input et button
let inputNameElt = document.getElementById("name");
let inputLastnameElt = document.getElementById("lastname");
let inputPosteElt = document.getElementById("poste");
let inputGsmElt = document.getElementById("gsm");
let inputMailElt = document.getElementById("mail");
let inputPostalElt = document.getElementById("postal");
let inputPhoneElt = document.getElementById("phone");

let fontSelect = document.getElementById("font");
let colorSelect = document.getElementById("color");
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

fontSelect.addEventListener("change", () => {
    let value = fontSelect.value;
    switch (value) {
        case "":
            divResult.style.fontFamily = "Ubuntu";
            break;
        case "alfa":
            divResult.style.fontFamily = "Alfa Slab One";
            break;
        case "archi":
            divResult.style.fontFamily = "Architects Daughter";
            break;
        case "gluten":
            divResult.style.fontFamily = "Gluten";
            break;
        case "lobster":
            divResult.style.fontFamily = "Lobster";
            break;
        default:
            break;
    }
})

colorSelect.addEventListener("change", () => {
    let value = colorSelect.value;
    switch (value) {
        case "":
            divResult.style.color = "black";
            break;
        case "bleu":
            divResult.style.color = "blue";
            break;
        case "rouge":
            divResult.style.color = "red";
            break;
        case "jaune":
            divResult.style.color = "yellow";
            break;
        case "orange":            
            divResult.style.color = "orange";
            break;
        case "lightblue":
            divResult.style.color = "lightblue";
            break;
        case "pink":
            divResult.style.color = "pink";
            break;
        case "green":            
            divResult.style.color = "green";
            break;
        default:
            break;
    }
})