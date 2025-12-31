// 1. Problem Definition
// Write a function that checks whether a given number is Even or Odd.

// 2. What You Are Expected to Do
// Take one number as input

// Check if it is divisible by 2

// Print "Even" or "Odd"

// 3. Thinking Steps (Logic in Words)
// Take the number

// Divide the number by 2

// Check the remainder

// If remainder is 0, number is Even

// Otherwise, number is Odd

function oddEven(num) {
    if(num % 2 === 0){
        console.log(`${num} is Even.`)
    }else{
        console.log(`${num} is odd.`)
    }
}

oddEven(15555)