// 1. Problem Definition

// Find the total sum of all numbers inside an array.


// W/O Function
// let arr = [10, 20, 30]

// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     sum = sum + arr[index];
// }

// console.log(sum)


function sumofArray(arr){
    let sum=0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log(`Array of Sum: ${sum}`)
}

sumofArray([26, 2000])