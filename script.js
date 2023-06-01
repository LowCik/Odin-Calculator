
const toCalculate = document.querySelector(".screen");
console.log(toCalculate.textContent);

const pads = document.querySelectorAll(".pad");

pads.forEach(pad => {
    pad.addEventListener('click', () => {
        let newScreen = toCalculate.innerText.concat(pad.textContent.toString());
        console.log(newScreen);//devrais renvoyer le screen update avec la nouvelle touche
        toCalculate.innerText=newScreen;
    })
})

const equalButtons = document.querySelectorAll('.equal');

equalButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        equalButtons.forEach(button => button.classList.add('hovered'));
    });

    button.addEventListener('mouseout', () => {
        equalButtons.forEach(button => button.classList.remove('hovered'));
    });
    button.addEventListener('click',()=>{
        Calc(toCalculate.textContent.toString);// envoie ce qu'il y a inscrit dans le screen à Calc()
    })
});



const add = function (nb1, nb2) {
    return nb1 + nb2;
}
const substract = function (nb1, nb2) {
    return nb1 - nb2;
}
const sum = function (nb1) {
    let init = 0;
    const sumWithInitial = nb1.reduce((acc, currentValue) => acc + currentValue, init);
    return sumWithInitial;
}

const multiply = function (nb1 = 0, nb2 = 0) {
    return nb1 * nb2;
}
const power = function (nb1, nb2) {
    return Math.pow(nb1, nb2);
}

function Calc(toCalculate) {

    // parcourir la str a chaque signe "+-*/" split et stocker dans une array.
    // 
for(indexInCalcul = 0;toCalculate[indexInCalcul];indexInCalcul++){
    console.log('yo');// devrais envoyer yo x fois où x est égale a la lenght de toCalculate
}
    // va cherche le textContent et soit l'intègre dans une focntion qui existe deja (googler) soit :
    // le faire soit même : Parser, trouver le premier signe multiplication ou division, faire le calcul. refaire jusqu'a ce que l'on trouve plus de division.
    // puis dès que l'on trouve un signe, faire le calcul.
    // check list : droite ou gauche vide ? ==0 /!\ 4+-3 == 4+0=4 puis 4-3 == 1
    // devrais réglé la pluspars des problème en fait.
    // chaque calcul modifie la ligne de calcul. Pas opti mais devrais fonctionner.

}