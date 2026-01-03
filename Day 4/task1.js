// Write a function that takes an array of numbers and returns the sum.

function sumArr(arr){
    let sum=0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        
    }

    return sum
}

console.log("Sum of Array:",sumArr([10, 20, 30]))
