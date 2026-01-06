// Find index of a value in array. Return -1 if not found.


// [4, 8, 15, 16, 23, 42], target = 15

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i, arr[i])
            return i
        }        
    }

    return -1
}

console.log(findIndex([4, 8, 15, 16, 23, 42], 15))
