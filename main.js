// Tableau de résultats
const responsesTab = ["c", "a", "a", "b", "c", "b", "b", "a", "c", "a"];
const formGroup = document.querySelectorAll(".form-group");

// Inputs des réponses utilisateur
let inputTab = [...document.querySelectorAll(".form-group input")];

const form = document.querySelector("form");

form.addEventListener('submit', evt => {
    evt.preventDefault();
    const result = userResults(); // Récupération des valeur utilisateur
    verification(result); // Vérification
}, false);


/*
  Fonction de récupération des résultat utilisateur
*/
function userResults() {
    let result = [];
    for (input of inputTab) {
        if (input.checked) {
            result.push(input.value);
        }
    }
    return result;
}
/*
  Fonction de vérification des résultat utilisateur avec le tableau de réponse
*/
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let advise = document.querySelector(".advise");
function verification(result){
    let goodResponse = 0
    for (let i = 0; i < responsesTab.length; i++) {
        if (result[i] == responsesTab[i]) {
            formGroup[i].style.cssText = `background: linear-gradient(90deg,darkgreen,green)`;
            goodResponse ++;
        }
        else
            formGroup[i].style.cssText = `background: linear-gradient(90deg,darkred,red)`;
    }
    if (goodResponse == formGroup.length){
        message.textContent= "Félicitation !"
        advise.innerHTML = ``;
    }
    else{
        message.innerHTML= "Il y a quelques erreurs !"
        advise.innerHTML = `Veuillez corriger les <span>zone en rouge</span>`;
    }
    score.innerHTML = `Votre <span>score</span> est de : <span>${goodResponse}/${formGroup.length}</span>`;
}