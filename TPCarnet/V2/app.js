//Création du tableau vide
let contacts = [];
//Création des variables
//Les input
let nameInputElt = document.getElementById("name");
let lastnameInputElt = document.getElementById("lastname");
let mailInputElt = document.getElementById("mail");
let telInputElt = document.getElementById("phone");
let validerBtn = document.querySelector(".validerBtn");
let findInputElt = document.getElementById("find-bar");
//Main Div
let contactsElt = document.querySelector(".list-items");
//Mise sous variable du localStorage("contacts")
let loadLStorage = localStorage.getItem("contacts");
//*****FONCTION*****//
//Fonction de création d'une div contact
function createContactDiv(contact) {
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
}
//Fonction de sauvegarde en local
function saveOnLocal(){
    //Stingification de l'array
    let contactsString = JSON.stringify(contacts);
    //Sauvegarde en localStorage
    localStorage.setItem("contacts",contactsString);
    //debug Perso
    console.log(localStorage.getItem("contacts"));
}
//Fonction de vérification contact.name VS input.value
function verifierCorrespondance(contact) {
    //Normalisation du regex et du prénom pour la comparaison
    let regex = new RegExp(`${findInputElt.value.toLowerCase()}`);
    let result = regex.test(contact.lastname.toLowerCase());
    if (result) {
        return contact;
    }
}
//Check a l'ouverture de la page si il y a des données contacts
//dans le LStorage
if (loadLStorage) {
    //Parse des données dans le LStorage
    let loadLStorageParse = JSON.parse(loadLStorage)
    //Remplissage du array vide avec les données du LStorage
    contacts = loadLStorageParse;
    //Boucle sur l'array pour faire les sous div
    loadLStorageParse.forEach((contact) => {
        createContactDiv(contact);
    });
};
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
        createContactDiv(contact);        
    });
    //reset des champs
    nameInputElt.value = "";
    lastnameInputElt.value = "";
    mailInputElt.value = "";
    telInputElt.value = "";
});
//Event dans la barre de recherche
findInputElt.addEventListener("input", () => {    
    //Création et reset du tableau avec les contacts filtrés
    let filteredContacts = "";
    //Modification du tableau des contacts filtrés    
    filteredContacts = contacts.filter(verifierCorrespondance);
    //reset la main div
    contactsElt.innerHTML="";
    filteredContacts.forEach((contact) => {
        createContactDiv(contact);
    });
});
//Event au blur de l'input de recherche
findInputElt.addEventListener('blur', () => {
    contactsElt.innerHTML="";
    findInputElt.value = "";
    contacts.forEach((contact) => {
        createContactDiv(contact);
    });
})
let findLow = findInputElt.value.toLowerCase();
    console.log(findLow);