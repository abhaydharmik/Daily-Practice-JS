// TASK 2: Check Palindrome Using Two Pointers
// Problem Definition: Check if a string is a palindrome.

function checkPallin(str) {
    let left = 0
    let right = str.length - 1

    while(left < right){
        if(str[left] !== str[right]) return false

        left++
        right --
    }

    return true
}

console.log(checkPallin("racecar"))