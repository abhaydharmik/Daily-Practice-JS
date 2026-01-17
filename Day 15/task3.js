// TASK 3: Sum of Array Using Recursion
// Problem Definition: Calculate sum of array elements using recursion.

function sumofArray(arr){
    if(arr.length === 0) return 0

    return arr[0] + sumofArray(arr.slice(1))
}

console.log(sumofArray([1, 2, 3,4]))