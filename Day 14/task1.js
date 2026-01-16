// TASK 1: Reverse Array Using Two Pointers
// Problem Definition: Reverse an array in place using two pointers.

// Input: [1, 2, 3, 4, 5]

let arr = [1, 2, 3, 4, 5]
let left = 0
let right = arr.length - 1

while(left < right){
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
}

console.log(arr)