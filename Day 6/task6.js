// Remove a value from array without modifying original array.

// [10, 20, 30, 40], remove = 20


function removeValue(arr, value) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== value){
            result.push(arr[i])
        }
        
    }

    return result
}

console.log(removeValue([10, 20, 30, 40], 20))