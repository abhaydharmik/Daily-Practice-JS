// TASK 4: Coin Change (Count Ways)
// Problem Definition: Given coins, count ways to make a target amount.

// Input:coins = [1,2,5], amount = 5
// Output: 4

function coinChangeWays(coins, amount, index = 0, memo = {}) {
    let key = amount + "-" + index
    if(key in memo) return memo[key]
    if(amount === 0) return 1
    if(amount < 0 || index === coins.length) return 0

    let useCoin = coinChangeWays(coins, amount - coins[index], index, memo)
    let skipCoin = coinChangeWays(coins, amount, index + 1, memo)

    memo[key] = useCoin + skipCoin
    return memo[key]
}

console.log(coinChangeWays([1,2,5],5))