function declOfNum(n, textForms) {
    n = Math.abs(n) % 100;
    if (n > 10 && n < 20) {
        return textForms[2];
    }
    if (n % 10 > 1 && n % 10 < 5) {
        return textForms[1];
    }
    if (n % 10 === 1) {
        return textForms[0];
    }
    return textForms[2];
}

export default declOfNum;
