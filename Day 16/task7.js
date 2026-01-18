// TASK 7: Debugging DP Mistake
// Buggy Code
// dp[i] = dp[i - 1] + dp[i - 2];

// Why It Fails

// If dp[0] and dp[1] not initialized

// Results become undefined

let dp = []
dp[0] =0
dp[1] =1

for (let i = 2; i <= 5; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];  
}

console.log(dp)