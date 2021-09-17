//Création du tableau vide
let contactList = [];
//Création des variables
let nameInputElt = document.getElementById("name");
let lastnameInputElt = document.getElementById("lastname");
let mailInputElt = document.getElementById("mail");
let telInputElt = document.getElementById("phone");
let validerBtn = document.querySelector(".validerBtn");
let contactsElt = document.querySelector(".list-items");


//Event au click sur le btn valider
validerBtn.addEventListener('click', function(){
    //creation d'un objet
    let newEntry = {
        "name" : nameInputElt.value,
        "lastname" : lastnameInputElt.value,
        "mail" : mailInputElt.value,
        "phone" : telInputElt.value
    };
    //push de l'objet dans l'array contacts
    contactList.push(newEntry);
    //debug perso
    console.log(contactList);
    let newdivElt = document.createElement("div");
    let newPElt = document.createElement("p");
    let newCloseBtn = document.createElement("button");

    newCloseBtn.innerText = "X";
    newCloseBtn.classList.add("close-btn");

    newdivElt.classList.add("item");

    newPElt.innerText = `Je suis ${nameInputElt.value} ${lastnameInputElt.value} mon numéro est le ${telInputElt.value}, et voila mon adresse mail ${mailInputElt.value}`;
    newdivElt.appendChild(newPElt);
    newdivElt.appendChild(newCloseBtn);

    contactsElt.appendChild(newdivElt);

    newCloseBtn.addEventListener("click", () => {
        newdivElt.remove()
    })    
    //reset des champs
    nameInputElt.value = "";
    lastnameInputElt.value = "";
    mailInputElt.value = "";
    telInputElt.value = "";
});

