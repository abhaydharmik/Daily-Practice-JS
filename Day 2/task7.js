// Check if array is in ascending order.

function sortArr(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]){
            return false
        }
    }

    return true
}

console.log(sortArr([10, 40, 50, 30, 20]))
console.log(sortArr([10, 20, 30, 40, 50]))