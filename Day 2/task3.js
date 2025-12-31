// Reverse a string without built-in methods.

let str = 'javascript'
let rev = ''

for (let i = str.length -1 ; i >=0 ; i--) {
    console.log('i:', i, "value:", str[i]);
    rev = rev + str[i]
    
}

console.log(rev)