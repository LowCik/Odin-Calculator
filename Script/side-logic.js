function checkIfSign(char) {
    if (char === '+' || char === '-') {
        return 1;
    }
    else if (char === '/' ||
        char === '*') {
        return 2;
    } else return false;
}

function checkStr(str) {
    /*vérifier les signe et retourner:
    1 si + ou -
    2 si * ou /
    si un char est pas du bon type renvoyer erreur
*/
}