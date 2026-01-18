// TASK 3: Min Cost to Reach End
// Problem Definition: 
// Each step has a cost. You can move 1 or 2 steps.
// Find minimum cost to reach the end.

// Input: [10, 15, 20]
// Output: 15

function minCost(cost, i=0, memo = {}) {
    if(i >= cost.length) return 0
    if(i in memo) return memo[i]

    let oneStep = cost[i] + minCost(cost, i + 1, memo)
    let twoStep = cost[i] + minCost(cost, i + 2, memo)

    memo[i] = Math.min(oneStep, twoStep)
    return memo[i]
}

console.log(Math.min(minCost([10, 15, 20], 0), minCost([10, 15, 20], 1)))