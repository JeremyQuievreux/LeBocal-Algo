let outElt = document.querySelectorAll(".out");

let start = false;

let startBtn = document.querySelector(".startBtn");

outElt.forEach(outSolo => {
        outSolo.addEventListener("mouseover", function() {
            alert('Vous avez perdu !!!')
        })
});