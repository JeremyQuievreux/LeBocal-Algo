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
    //Reset de la div principale
    contactsElt.innerHTML = "";
    //Boucle for (action pour chaque element de l'array)
    for (let i = 0; i < contactList.length; i++) {
        //Mise sous variable d'un contact
        const contact = contactList[i];  
        //Création des elements   
        let newdivElt = document.createElement("div");
        let newPElt = document.createElement("p");
        let newCloseBtn = document.createElement("button");
        //Configuration du boutton
        newCloseBtn.innerText = "X";
        newCloseBtn.classList.add("close-btn");
        //Setup de la div
        newdivElt.classList.add("item");
        //Setup du p
        newPElt.innerText = `Je suis ${contact.name} ${contact.lastname} mon numéro est le ${contact.phone}, et voila mon adresse mail ${contact.mail}`;
        //Injection des elements dans la nouvelle div
        newdivElt.appendChild(newPElt);
        newdivElt.appendChild(newCloseBtn);
        //Injection de la div dans la grosse div
        contactsElt.appendChild(newdivElt);
        //Event au click sur le boutton fermé
        newCloseBtn.addEventListener("click", () => {
            //suppression de l'element dans le array
            contactList.splice(i, 1);
            //suppression de la div
            newdivElt.remove()
            //debug perso
            console.log(contactList);
        }) 
    }
    //debug perso
    console.log(contactList);   
    //reset des champs
    nameInputElt.value = "";
    lastnameInputElt.value = "";
    mailInputElt.value = "";
    telInputElt.value = "";
});

