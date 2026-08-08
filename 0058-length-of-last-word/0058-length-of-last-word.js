/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   s = s.trim();
   let palabras = s.split(' ');
    return palabras[palabras.length - 1].length;
};