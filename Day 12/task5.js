// TASK 5: Remove Duplicate Characters from String
// Problem Definition: Remove duplicate characters, keep first occurrence.

// Input: "programming"


let str = "programming"
let seen = {}
let result = ""

for (let i = 0; i < str.length; i++) {
    if(!seen[str[i]]){
        seen[str[i]] = true
        result += str[i]
    }    
}

console.log(result)