/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let contador = {};
    let maxNum = nums[0];
    let maxRepeticiones = 0;
    for(let num of nums){
        contador[num] = (contador[num] || 0) + 1;

        if(contador[num] > maxRepeticiones){
            maxRepeticiones = contador[num];
            maxNum = num;
        }
    }
    return maxNum;
};