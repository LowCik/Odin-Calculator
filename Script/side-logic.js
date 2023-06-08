function checkCharSign(char) {
    if (char === '+' || char === '-') {
        return 1;
    }
    else if (char === '/' ||
        char === '*') {
        return 2;
    } else return false;
}

function checkStrSign(str) {
    if (str.include('*') || str.include('/') || str.include('+') || str.include('-')) {
        switch (true) {
            case str.include('+'):
                return 1;
                break;
            case str.include('-'):
                return 2;
                break;
            case str.include('/'):
                return 3;
                break;
            case str.include('*'):
                return 4;
                break;
            default:
                return 0;
                break;
        }// renvoie une valeur en focntion du sign
    }// check si il y a un sign
}
