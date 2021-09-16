let btnContainer = document.querySelector("#button-container");
//Event au mouseover
btnContainer.addEventListener('mouseover', function(e){
    let newX = getAxe(90);
    let newY = getAxe(90);
    btnContainer.style.bottom = newY;
    btnContainer.style.left = newX;
})

function getAxe(max) {
    let chiffre = Math.round(Math.random() * max);
    return (chiffre + "%")
}