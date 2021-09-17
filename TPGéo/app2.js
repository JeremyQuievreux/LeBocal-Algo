//V2 avec fonction externe //
//Création des variables
let whereNowBtn = document.querySelector(".where-now");
let wherePastBtn = document.querySelector(".where-past");
let saveBtn = document.querySelector(".save");
let resetBtn = document.querySelector(".reset");
let latElt = document.querySelector(".latitude-data");
let longElt = document.querySelector(".longitude-data");
//***FONCTION PERSO***//
function writePositionInHtml(){
    //Fonction Callback
    function getPosition(position) {
        //Insertion de données latitude et longitude dans les span vide du html
        latElt.innerText = position.coords.latitude;
        longElt.innerText = position.coords.longitude;
        //test googlemap
        console.log("https://www.google.com/maps/dir//"+ position.coords.latitude +"," + position.coords.longitude+""); 
        console.log("http://www.google.com/maps/place/"+ position.coords.latitude + "," + position.coords.longitude + "/@" + position.coords.latitude + "," + position.coords.longitude + "z15"); 
        console.log(`https://maps.google.com/?q=43.68249714828805,7.18665733583687`);
        43.68249714828805, 7.18665733583687
    }
    //Fonction de geolocalisation de base + fonction callback    
    navigator.geolocation.getCurrentPosition(getPosition);

}

function savePositionLocalStorage() {
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
}
//***Debut du scripte***//
//Event au click sur btn ou suis je
whereNowBtn.addEventListener('click', () => { 
    writePositionInHtml();
       
})

//Event au click sur btn save
saveBtn.addEventListener('click', () => {
    savePositionLocalStorage();
})

//Event au click sur btn Ou etais je
wherePastBtn.addEventListener('click', () => {
    //si il y a des données dans le localStorage
    if (localStorage.latitude && localStorage.longitude) {
        //insertion de latitude et longitude stocké dans le localStorage
        // dans les span vide du html
        latElt.innerText = localStorage.latitude;
        longElt.innerText = localStorage.longitude;
    //sinon
    } else {
        //Insertion de rien dans la span
        latElt.innerText = "";
        longElt.innerText = "";
    }
    
    
})

//Event au click sur btn reset
resetBtn.addEventListener('click', () => {
    //Nettoyage du localStorage
    localStorage.removeItem("latitude");
    localStorage.removeItem("longitude");
    //Debug Perso
    console.log(localStorage);
})
