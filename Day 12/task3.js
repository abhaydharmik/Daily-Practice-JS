// TASK 3: Find First Non-Repeating Character
// Problem Definition: Find the first character that does not repeat.

// Input: "aabbcdde"

let str = "aabbcdde"
let freq = {}

for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1    
}

let result = null

for (let i = 0; i < str.length; i++) {
    if(freq[str[i]] === 1){
        result = str[i]
        break
    }
}

console.log(result)