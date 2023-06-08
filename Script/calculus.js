
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