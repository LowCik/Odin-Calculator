
const toCalculate = document.querySelector(".screen");
console.log(toCalculate.textContent);

const pads = document.querySelectorAll(".pad");

pads.forEach(pad => {
    pad.addEventListener('click', () => {
        let newScreen = toCalculate.innerText.concat(pad.textContent.toString());// le screen update avec la nouvelle touche
        toCalculate.innerText = newScreen;// enregistre la nouvelle valeur
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
    button.addEventListener('click', () => {
        Calc(toCalculate.innerText);// envoie ce qu'il y a inscrit dans le screen à Calc()
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

function checkIfSign(char) {
    if (char === '+' ) {
        return 1;
    }
    else if (char === '/' ||
        char === '*') {
        return 2;
    }
    else if (char === '-'){
        return 3;
    }
    else return false;
}

function Calc(toCalc) {
    let numArr=[];
    let signCounter = 0;;
    let limit = 0;
    // parcourir la str a chaque signe "+*/" split et stocker dans une array.
    // 
    //while sign présent alors boucler
    while (isNaN(toCalc) && limit < 200) { // Si toCalc est NAN alors ça veux dire que le calcul n'est pas fini, dès que ça deviens !NaN ça sort de la boucle
        checkStr(toCalc); // if 2 alors encore un * ou / if 1 alors encore un + ou -. Si un - est au début c'est un nombre alors on sort de la boucle principale.
    
        limit++;
    }
    console.log(numArr);
    toCalculate.innerText = toCalc;
    // va cherche le textContent:
    // le faire soit même : Parser, trouver le premier signe multiplication ou division, faire le calcul. refaire jusqu'a ce que l'on trouve plus de division.
    // puis dès que l'on trouve un signe, faire le calcul.
    // check list : droite ou gauche vide ? ==0 /!\ 4+-3 == 4+0=4 puis 4-3 == 1
    // devrais réglé la pluspars des problème en fait.
    // chaque calcul modifie la ligne de calcul. Pas opti mais devrais fonctionner.

}