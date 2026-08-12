/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let izq = 0;
    let maximo = 0;
    let frecuencias = new Map();
    for (let der = 0; der < nums.length; der++) {
        frecuencias.set(nums[der], (frecuencias.get(nums[der]) || 0) + 1);

        while (frecuencias.get(nums[der]) > k) {
            frecuencias.set(
                nums[izq],
                frecuencias.get(nums[izq]) - 1
            );
            izq++;
        }

        maximo = Math.max(maximo, der - izq + 1);
    }
    return maximo;
};