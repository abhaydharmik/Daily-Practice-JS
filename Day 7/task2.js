// Create Your Own filter Function
// Problem Definition: Implement a function that works like Array.filter().

// Input: [5, 12, 8, 20, 3]
// Condition: x > 10

function myFilter(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
            result.push(arr[i])
          
        }        
    }

    return result
}

console.log(myFilter([1, 2, 40, 50, 10, 60, 5], function(x){
    return x > 10
}))