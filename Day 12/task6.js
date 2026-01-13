// TASK 6: Rotate Array to the Right
// Problem Definition: Rotate array to the right by k steps.


// Input: [1,2,3,4,5], k = 2

function rotateRight(arr, k){
    let n = arr.length
    k = k % n

    let result = []

    for (let i = n - k; i < arr.length; i++) {
        result.push(arr[i])        
    }

    for (let i = 0; i < n-k; i++) {
        result.push(arr[i])        
    }

    return result
}

console.log(rotateRight([1, 2, 3, 4, 5, 6 ], 2))