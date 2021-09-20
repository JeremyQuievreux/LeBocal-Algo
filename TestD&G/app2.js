// les variables
const bases = document.querySelectorAll('.base');
const box = document.querySelectorAll('.case');

let currentElt;

//Les fonctions
function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave(){
    this.className = "case";    
}

function dragDrop() {
    this.className = "case";
    this.append(currentElt);
}  

function dragStart(e) {
    this.className += " tenu";
    currentElt = e.target;
    setTimeout(() => {
        this.className = "invisible";
    }, 0);    
}

function dragEnd() {
    this.className = "base"; 
}

// Les Events sur la div draggable
bases.forEach(base => {
    base.addEventListener('dragstart', dragStart);
    base.addEventListener('dragend', dragEnd); 
});

//Les events sur les div vides    
for (const vide of box) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
}
