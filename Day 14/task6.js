// TASK 6: Sliding Window — Smallest Subarray with Sum ≥ Target
// Problem Definition: Find smallest subarray length whose sum ≥ target.

// Input: arr = [2,1,5,2,3,2], target = 7

function minSubarrayLen(arr, target) {
    let left = 0
    let sum = 0
    let minLen = Infinity

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]
        
        while(sum >= target){
            minLen = Math.min(minLen, right - left + 1)
            sum -= arr[left]
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen
}

console.log(minSubarrayLen([2,1,5,2,3,2], 7))