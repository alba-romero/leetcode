/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let noRepetido = nums.filter(
  (num) => nums.indexOf(num) === nums.lastIndexOf(num)
);
return noRepetido[0];
};