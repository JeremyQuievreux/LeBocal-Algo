//Création du tableau vide
let contacts = [];
//Création des variables
let nameInputElt = document.getElementById("name");
let lastnameInputElt = document.getElementById("lastname");
let mailInputElt = document.getElementById("mail");
let telInputElt = document.getElementById("phone");
let validerBtn = document.querySelector(".validerBtn");
let contactsElt = document.querySelector(".list-items");
let loadLStorage = localStorage.getItem("contact");
//Condition de départ pour les données locales
if (loadLStorage) {
    let loadLStorageParse = JSON.parse(loadLStorage)
    contacts = loadLStorageParse;
    loadLStorageParse.forEach((contact) => {
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
            //Recherche de l'index du contact grace a l'id de l'user
            const findById = (element) => element.id == contact.id;
            let index = contacts.findIndex(findById);
            //Suppression de l'élément dans l'array grace a l'index
            contacts.splice(index, 1);
            //Mise a Jour dans le localStorage
            saveOnLocal();
            //suppression de la div
            newdivElt.remove()
        }) 
    });
};
//Fonction de sauvegarde en local
function saveOnLocal(){
    //Stingification de l'array
    let contactsString = JSON.stringify(contacts);
    //Sauvegarde en localStorage
    localStorage.setItem("contact",contactsString);
    //debug Perso
    console.log(localStorage.getItem("contact"));
}
//Event au click sur le btn valider
validerBtn.addEventListener('click', function(){
    //longueur de l'array
    let listLength = contacts.length;
    //creation d'un objet
    let newEntry = {
        "id" : listLength,
        "name" : nameInputElt.value,
        "lastname" : lastnameInputElt.value,
        "mail" : mailInputElt.value,
        "phone" : telInputElt.value
    };
    //push de l'objet dans l'array contacts
    contacts.push(newEntry);    
    //Sauvegarde dans le localStorage
    saveOnLocal()
    //Reset de la div principale
    contactsElt.innerHTML = "";
    //Boucle sur l'array (pour chaque)
    contacts.forEach((contact) => {
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
            //Recherche de l'index du contact grace a l'id de l'user
            const findById = (element) => element.id == contact.id;
            let index = contacts.findIndex(findById);
            //Suppression de l'élément dans l'array grace a l'index
            contacts.splice(index, 1);
            //Mise a Jour dans le localStorage
            saveOnLocal();
            //suppression de la div
            newdivElt.remove()
        }) 
    });
    //reset des champs
    nameInputElt.value = "";
    lastnameInputElt.value = "";
    mailInputElt.value = "";
    telInputElt.value = "";
});



