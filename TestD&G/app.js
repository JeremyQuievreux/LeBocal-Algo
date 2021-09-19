// les variables
const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');

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
    this.append(base);
}  

function dragStart() {
    this.className += " tenu";
    setTimeout(() => {
        this.className = "invisible";
    }, 0);    
}

function dragEnd() {
    this.className = "base"; 
}

// Les Events sur la div draggable
base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd); 

//Les events sur les div vides    
for (const vide of box) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
}
