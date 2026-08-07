/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let valores = String(x).split('');
    let delReves = "";
    for(let i = valores.length - 1 ; i >= 0; i--){
        delReves += valores[i];
    }
    if(delReves == String(x)){
        return true;
    }
    return false;
};