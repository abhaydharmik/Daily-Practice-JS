// TASK 3: Flatten One-Level Array
// Problem: Flatten one level of nested array.

// Input: [1, [2, 3], 4, [5, 6]]


let arr = [1, [2, 3], 4, [5, 6]]
let flat = []

for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
        for (let j = 0; j < arr[i].length; j++) {
            flat.push(arr[i][j])            
        }
    }else{
        flat.push(arr[i])
    }
}

console.log(flat)