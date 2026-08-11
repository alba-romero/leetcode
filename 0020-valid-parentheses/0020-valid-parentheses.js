/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pila = [];
    let mapa = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    let ultimo; 
    for(let i = 0; i <= s.length; i++){
        ultimo = pila[pila.length - 1];
        if( s[i] == "(" || s[i] == "[" || s[i] == "{"){
            pila.push(s[i]);
        }else if(ultimo === mapa[s[i]]){
            pila.pop();
        }else{
            return false;
        }
    }
    return !pila.length;
};