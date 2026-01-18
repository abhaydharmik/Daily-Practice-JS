// TASK 2: Climbing Stairs (DP Intro)
// Problem Definition :You can climb 1 or 2 steps. How many ways to reach step n?

// Input: 4
// Output: 5

// Ways:

// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2

function climbWay(n, memo={}){
    if(n in memo)return memo[n]
    if(n===0) return 1
    if(n===1) return 1

    memo[n] = climbWay(n-1, memo) + climbWay(n-2, memo)
    return memo[n]
}

console.log(climbWay(4))