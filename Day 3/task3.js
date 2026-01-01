// Check if a string reads the same forwards and backwards.

// let str = "hello"
let str = "madam"

let rev = ""

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i]   
}

console.log(rev === str)