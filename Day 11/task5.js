// TASK 5: Deep Copy Object
// Problem: Create a deep copy.

let obj = {name: "JS", info: {level: "beginner"}}

let copy = JSON.parse(JSON.stringify(obj))

copy.info.level = "advanced"

console.log(obj)
console.log(copy)

