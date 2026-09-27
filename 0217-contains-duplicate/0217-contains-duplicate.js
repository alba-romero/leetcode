/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const miSet = new Set(nums);
    return miSet.size != nums.length;
};