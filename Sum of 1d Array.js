// ======================Question===================
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

let nums = [3, 1, 2, 10, 1]

function runningSum(nums) {
    let ans = []
    ans[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        ans[i] = ans[i - 1] + nums[i]
    }
    return ans
}

console.log(runningSum(nums));