///V1 sans fonction externe //
//Création des variables
let whereNowBtn = document.querySelector(".where-now");
let wherePastBtn = document.querySelector(".where-past");
let saveBtn = document.querySelector(".save");
let resetBtn = document.querySelector(".reset");
let latElt = document.querySelector(".latitude-data");
let longElt = document.querySelector(".longitude-data");

//Event au click sur btn ou suis je
whereNowBtn.addEventListener('click', () => { 
    //Fonction Callback
    function getPosition(position) {
        //Insertion de données latitude et longitude dans les span vide du html
        latElt.innerText = position.coords.latitude;
        longElt.innerText = position.coords.longitude;
    }
    //Fonction de geolocalisation de base + fonction callback    
    navigator.geolocation.getCurrentPosition(getPosition);
})
//Event au click sur btn save
saveBtn.addEventListener('click', () => {
    //Fonction de geolocalisation de base + fonction callback    
    navigator.geolocation.getCurrentPosition(savePosition);
    //Fonction Callback
    function savePosition(position) {
        //Sauvegarde des données latitude et longitude dans le localStorage
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
    }   
    //Debug perso ;)
    console.log(localStorage); 
})
//Event au click sur btn Ou etais je
wherePastBtn.addEventListener('click', () => {
    //insertion de latitude et longitude stocké dans le localStorage
    // dans les span vide du html
    latElt.innerText = localStorage.latitude;
    longElt.innerText = localStorage.longitude;
})
//Event au click sur btn reset
resetBtn.addEventListener('click', () => {
    //Nettoyage du localStorage
    localStorage.clear();
    //Debug Perso
    console.log(localStorage);
})
