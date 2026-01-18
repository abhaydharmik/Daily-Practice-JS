// TASK 6: Bottom-Up DP (Tabulation) — Fibonacci
// Problem Definition: Solve Fibonacci using bottom-up DP.

    function fibDP(n) {
        if(n===0) return 0
        let dp = [0, 1]
        

        for (let i = 2; i <=n ; i++) {
            dp[i] = dp[i-1] + dp[i-2]        
        }

        return dp[n]
    }

    console.log(fibDP(6))