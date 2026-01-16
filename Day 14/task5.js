// TASK 5: Sliding Window — Max Sum of Subarray (Size k)
// Problem Definition: Find maximum sum of subarray of size k.

// Input: arr = [2, 1, 5, 1, 3, 2], k = 3

// Explanation: [5,1,3] → sum = 9

function maxSubarraySum(arr, k) {
    let windowSum = 0
    let maxSum = 0

    for (let i = 0; i < k; i++) {
        windowSum += arr[i]        
    }

    maxSum =  windowSum
    
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

console.log(maxSubarraySum([2,1,5,1,3,2], 3))