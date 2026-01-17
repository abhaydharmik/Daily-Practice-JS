// TASK 6: Backtracking Basics — Generate All Subsets
// Problem Definition: Generate all subsets of an array.

function subsets(arr) {
    let result = []

    function backtrack(index, current) {
        if(index === arr.length){
            result.push([...current])
            return
        }   

        current.push(arr[index])
        backtrack(index + 1, current)

        current.pop()
        backtrack(index + 1, current) 
    }

    backtrack(0, [])
    return result
}

console.log(subsets([1, 2]))