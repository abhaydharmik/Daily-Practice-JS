// TASK 4: Count Occurrences
// Problem: Count occurrences of values.

// Input: ["a", "b", "a", "c", "b", "a"]

let arr = ["a", "b", "a", "c", "b", "a"]
let count = []

for (let i = 0; i < arr.length; i++) {
    if(count[arr[i]]){
        count[arr[i]]++
    }else{
        count[arr[i]] = 1
    }
}

console.log(count)