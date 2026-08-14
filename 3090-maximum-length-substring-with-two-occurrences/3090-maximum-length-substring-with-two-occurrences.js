/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let izq = 0;
    let maximo = 0;
    let frecuencias = new Map();
    for (let der = 0; der < s.length; der++) {
        frecuencias.set(s[der], (frecuencias.get(s[der]) || 0) + 1)

        while (frecuencias.get(s[der]) > 2) {
            frecuencias.set(
                s[izq],
                frecuencias.get(s[izq]) - 1
            );
            izq++;
        }

        maximo = Math.max(maximo, der - izq + 1);
    }
    return maximo;
};