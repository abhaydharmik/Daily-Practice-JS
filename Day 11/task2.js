// TASK 2: Remove Falsy Values

// Problem: Remove all falsy values.
// Falsy values: false, 0, "", null, undefined, NaN

let arr = [0, "JS", "", false, 42, null, undefined]
let result = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i]){
        result.push(arr[i])
    }    
}

console.log(result)