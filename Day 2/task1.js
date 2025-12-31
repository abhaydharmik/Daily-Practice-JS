// Find the largest number in an array without using Math.max.

// let arr = [12, 45, 7, 89,23]

// let max = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
    
// }

// console.log(max)

// function findMax(num) {
//     let max = 0

//     for (let i = 0; i < num.length; i++) {
//         if(num[i] > max){
//             max = num[i]
//         }
        
//     }

//     console.log(max)
// }

// findMax([10, 20, 30, 880, 11])

let arr = [12, 45, 7, 89,23]
console.log(Math.max(...arr))