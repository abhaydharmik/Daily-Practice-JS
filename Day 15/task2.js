// TASK 2: Factorial Using Recursion
// Problem Definitio: Find factorial of a number using recursion.

function factorial(n) {
    if(n === 1){
        return 1
    }

    return n * factorial(n -1)
}

console.log(factorial(5))