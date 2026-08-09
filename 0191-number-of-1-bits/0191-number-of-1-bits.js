/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binarioTexto = n.toString(2);
    binario = binarioTexto.split('');
    let contador = 0;
    binario.forEach((elemento,)=>{
     if(elemento == "1"){
        contador++;
    }
    });
    return contador;
};