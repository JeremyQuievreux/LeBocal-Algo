let outElt = document.querySelectorAll(".out");



outElt.forEach(outSolo => {
    outSolo.addEventListener("mouseover", function() {
        alert('Vous avez perdu !!!')
    })
});