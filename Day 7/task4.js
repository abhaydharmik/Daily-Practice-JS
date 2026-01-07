// TASK 4: Double Only Even Numbers (Manual Logic)
// Problem Definition: From an array, double only even numbers.

let arr = [1, 2, 3, 4, 5]
let result = []


for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        result.push(arr[i] * 2)
    }
}

console.log(result)