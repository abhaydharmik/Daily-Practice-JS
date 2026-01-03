// Check if all numbers in an array are positive.

function checkPositive(arr) {
    
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] <= 0){
        return false
       }
    }

    return true
}

console.log(checkPositive([10, 20, 40, 60, -1]))