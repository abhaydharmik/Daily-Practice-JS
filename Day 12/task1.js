// TASK 1: Capitalize First Letter of Each Word
// Problem Definition: Capitalize the first letter of each word in a sentence.

// Input: "javascript is very powerful"


let sentence = "javascript is very powerful"
let words = sentence.split(" ")
let result = []

for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let capitalized = word[0].toUpperCase() + word.slice(1)
    result.push(capitalized)
}

console.log(result.join(" "))