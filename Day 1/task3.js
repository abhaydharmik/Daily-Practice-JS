// 1. Problem Definition

// Count how many vowels exist in a given string.

// - Take a string

// - Loop through each character

// - Count vowels (a e i o u)

// let str = 'Kem Chho Majama!!'
// let vowels = 'aeiou'
// let count = 0

// for (let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i].toLowerCase())){
//         count++
//     }
// }
// console.log("Numbers of vowels in strings(lowercase):",count)

function findVow(str) {
    let count = 0
    let vow = 'aeiou'
    
    for (let i = 0; i < str.length; i++) {
        if(vow.includes(str[i].toLowerCase())){
            count++
        }   
    }
    
    console.log("String:",str)
    console.log("Numbers of vowerls in string",count)
}

findVow("Chalie Shuru Karte Hai..!!")