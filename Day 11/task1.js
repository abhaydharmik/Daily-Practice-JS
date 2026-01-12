// TASK 1: Find Second Largest Number
// Problem: Find the second largest number in an array.

// Input: [10, 45, 23, 89, 89, 34]
// Output: 45

let arr = [10, 45, 23, 89, 89, 34]

let max = -Infinity
let secondMax = -Infinity

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        secondMax = max
        max = arr[i]
    }else if(arr[i] < max && arr[i] > secondMax){
        secondMax = arr[i]
    }
}

console.log("Second Max Number:",secondMax)