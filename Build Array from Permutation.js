// ================Inputs ===============
nums = [0,2,1,5,3,4]
ans = []

// ================== Question ========================
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// ================First Approach=====================
function buildArr(arr){
    let ans = []
    for(let i = 0 ; i < arr.length ; i++){
        let index = arr[i]
        ans.push(arr[index])
    }
    return ans;
}
console.log(buildArr(nums));

// ==================Second inbuilt function approach ================
nums.forEach((element,index) => {
    let i = nums[index]
    console.log(nums[i]);
});
