// TASK 5: Longest Common Subsequence (Basic DP)
// Problem Definition: Find length of longest common subsequence.

// Input: "text1 = 'abcde', text2 = 'ace'"


// Output:3

function lcs(text1, text2, i = 0, j = 0, memo = {}) {
    let key = i + "," + j

    if(key in memo) return memo[key]
    if(i===text1.length || j === text2.length) return 0

    if(text1[i] === text2[j]){
        memo[key] = 1 + lcs(text1, text2, i + 1, j + 1, memo)
    }else{
        memo[key] = Math.max(lcs(text1, text2, i + 1, j, memo), lcs(text1, text2, i, j+ 1, memo))
    }

    return memo[key]
}

console.log(lcs("abcde", "ace"))

