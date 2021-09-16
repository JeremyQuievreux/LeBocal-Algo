//Assignation des variables
let btnElt = document.querySelector(".add-task");
let inputElt = document.getElementById("task");
let divElt = document.querySelector(".todos");
let cateElt = document.querySelector(".categories")
//fonction ajouter les taches
function addTask() {    
//creation des elements
    //la div
    let divTodos = document.createElement("div");
    //le paragraphe
    let pElt = document.createElement("p");
    //le bouton X
    let closeBtn = document.createElement("button")
    //la checkbox 
    let checkBoxElt = document.createElement("input");
    //Ajout de la Class a la checkbox
    checkBoxElt.classList.add("check-todo");
    //Changement de type
    checkBoxElt.setAttribute("type", "checkbox")
    //Event au check (toggle de style)
    checkBoxElt.addEventListener('change', function(){
        //Selection de l'element suivant
        let task = checkBoxElt.nextSibling
        //Condition sur le style
        if (task.style.textDecoration != "line-through") {
            task.style.textDecoration = "line-through";
        } else {
            task.style.textDecoration = "none";
        }
    })
    //Modification du bouton X
        //Ajout de la class
    closeBtn.classList.add("close-btn");
        //Et la valeur
    closeBtn.innerText = "X";  
    //Event suppression tache sur le bouton X
    closeBtn.addEventListener('click', function(){
        //suppression de la div
        divTodos.classList.add("fade");
        setTimeout(function(){
            divTodos.remove();
            }, 800);
    })  
    //Contenu texte du paragraphe récupéré de l'input
    pElt.innerText = inputElt.value;
    //Event sur le paragraphe
    pElt.addEventListener('click', function(){
        let newDiv = document.createElement('div');
        let newInput = document.createElement('input');
        let newVBtn = document.createElement('button');
        let newSelect = document.createElement("select");
        let newOption1 = document.createElement("option");
        let newOption2 = document.createElement("option");
        let newOption3 = document.createElement("option");
        let divParent = pElt.parentNode;

        newOption1.setAttribute("value", "Loisir");
        newOption1.innerText = "Loisir";
        newOption2.setAttribute("value", "Ménage");
        newOption2.innerText = "Ménage";
        newOption3.setAttribute("value", "Administratif");
        newOption3.innerText = "Administratif";

        newSelect.appendChild(newOption1);
        newSelect.appendChild(newOption2);
        newSelect.appendChild(newOption3);

        newVBtn.innerText = "Modifier";
        newInput.value = pElt.innerText;
        newDiv.appendChild(newInput);
        newDiv.appendChild(newSelect);
        newDiv.appendChild(newVBtn);
        divParent.replaceChild(newDiv, pElt);
        newVBtn.addEventListener('click', function(){
            pElt.innerText = newInput.value;
            divParent.replaceChild(pElt, newDiv);
            if (newSelect.value == "Loisir") {
                divParent.style.backgroundColor = "lightblue"
            } else if (newSelect.value == "Ménage"){
                divParent.style.backgroundColor = "lightpink";
            } else{
                divParent.style.backgroundColor = "lightyellow";
            }
        })
    })
    //ajout class a la div
    divTodos.classList.add("todo-item"); 
    divTodos.classList.add("active");
    if (cateElt.value == "administratif") {
        divTodos.style.backgroundColor = "lightyellow";
    } else if (cateElt.value == "Loisir") {
        divTodos.style.backgroundColor = "lightblue";
    }else {
        divTodos.style.backgroundColor = "lightpink";
    }

    //injection de la Checkbox dans la div
    divTodos.appendChild(checkBoxElt);  
    //Injection du paragraphe dans la div
    divTodos.appendChild(pElt);
    //injection du btn X dans la div
    divTodos.appendChild(closeBtn);
    //injection de la div dans la grosse div
    divElt.appendChild(divTodos);
    //Reset du contenu de l'input
    inputElt.value = "";       
}


//Event sur le bouton ajouter
btnElt.addEventListener('click', addTask);






 