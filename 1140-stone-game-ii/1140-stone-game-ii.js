/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
 let m = 1;
 let i = 0;
let memoria = new Map();
   function maxPiedras(i, m) {
     let clave = i + "," + m;

        if (memoria.has(clave)) {
            return memoria.get(clave);
        }

        if (i === piles.length) {
       return 0;
}
     let total = 0;
     let mejor = 0;
     for(let j = i; j < piles.length; j++){
        total += piles[j];
     }
     for (let x = 1; x <= Math.min(2*m, (piles.length - i)); x++) {
    let rival = maxPiedras(x + i, Math.max(m, x));
    let resultado = total - rival;
    mejor = Math.max(mejor, resultado);
}
memoria.set(clave, mejor);
return mejor;
    }
    return maxPiedras(i, m);
};