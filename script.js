//-----------------------Fonctions générateur couleur---------------------

//on crée une fonction qui génère un chiffre entre 0 et 255
function randomNumber() {
    return Math.floor(Math.random() * 256);     //floor arrondi la valeur à l'entier en dessous
}

//fonction qui retourne une couleur aléatoire en rgb
function randomColor() {
    //return "rgb(" +randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}


//-------------------------Check Div-----------------------

//fonction qui permet de vérifier s'il y a des div dans les containes

function checkDiv() {
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box');
    if (boxes.length > 0) {
        document.getElementById('removeLastButton').style.display = 'inline-block';
        document.getElementById('removeAllButton').style.display = 'inline-block';

        if (boxes.length > 1) {
            document.getElementById('shuffleButton').style.display = 'inline-block';
        }
        else {
            document.getElementById('shuffleButton').style.display = 'none';
        }
    } else {
        document.getElementById('removeLastButton').style.display = 'none';
        document.getElementById('removeAllButton').style.display = 'none'; // display none : ne les affiche plus
        document.getElementById('shuffleButton').style.display = 'none'; // display none : ne les affiche plus

    }
}

//---------------------------Add Div-------------------

//on crée une fonction qui va générer une div
function addDiv() {
    //on récupère la div avec l'id container de notre index.html
    let container = document.getElementById('container');

    //on crée une div <div> </div>
    let newDiv = document.createElement('div'); //permet de créer n'importe quel élément html

    //on va ajouter une class à notre div : <div class="box"> </div>
    // newDiv.classList.add('box'); //1ere méthode
    newDiv.className = 'box';   //2ème méthode

    //on va ajouter un style à notre div : <div class="box" style="background-color: red"> </div>
    newDiv.style.backgroundColor = randomColor();
    newDiv.textContent = "HEY"

    //Ajout d'un évênement sur la div
    newDiv.addEventListener("click", () => {
        container.removeChild(newDiv);
        checkDiv();
    })
    //on va imbriquer la nouvelle div dans la div container
    container.appendChild(newDiv);  //prend newDiv et la rend enfant de container, elle l'insère
    //appenChild permet d'ajouter un enfant à un parent
    //appen permet d'ajouter des enfants à un parent
}

//------------------------Remove Last div-----------------------------

//fonction enlève la dernière div
function removeLastDiv() {
    //on récupère le container
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box');
    if (boxes.length > 0) {
        //si j'ai au moins une div de créée j'enlève la dernière
        container.removeChild(boxes[boxes.length - 1]);
        checkDiv();
    }
}

//-----------------------Remove All Div-----------------------

//fonction qui supprime toute les div

function removeAllDiv() {
    let container = document.getElementById('container');
    container.innerHTML = "";
    checkDiv();
}

// fonction qui mélange le tableau des div

function shuffleDiv() {
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box');
    if (boxes.length > 1) {

        //on créer mélange les éléments du tableau 
        let divArray = Array.from(boxes).sort(() => Math.random() - 0.5);
        //on vide le container
        container.innerHTML = "";
        //on ajoute les divs dans le container
        divArray.forEach((div) => {
            container.appendChild(div);
        });
    }
}

//-------------------------Les Boutons -----------------------------

//on jaoute un évènement à notre bouton aved l'id "addButton"
//je récupère le bouton avec l'id button
let addButton = document.getElementById('addButton');

//on ajoute un évènement click sur notre bouton
addButton.addEventListener("click", () => {
    //on appelle notre fonction addDiv
    addDiv();
    checkDiv();
});      //fonction anonyme qui n'a pas de nom, ou collable

//on ajoute un évènement à notre bouton avec l'id "removeLastButton"
document.getElementById('removeLastButton').addEventListener("click", () => {
    removeLastDiv();
})

document.getElementById('removeAllButton').addEventListener("click", () => {
    removeAllDiv();
})
document.getElementById('shuffleButton').addEventListener("click", () => {
    shuffleDiv();
})

//! Appel initial de la fonction

checkDiv();