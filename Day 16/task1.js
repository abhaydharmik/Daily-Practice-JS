// TASK 1: Fibonacci with Memoization
// Problem Definition: Optimize recursive Fibonacci using memoization.

function fibonacci(n, memo={}){
    if(n in memo) return memo[n]
    if(n===0) return 0
    if(n===1) return 1

    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]
}

console.log(fibonacci(6))