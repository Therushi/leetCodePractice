// ================Question==================
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

let num = [1, 2, 1]

var getConcatenation = function(nums) {
    let num1 = [...nums]
    let concatArray = nums.concat(num1)
    return concatArray
};

console.log(concat(num));