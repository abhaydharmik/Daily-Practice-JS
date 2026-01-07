// TASK 3: Create Your Own reduce Function
// Problem Definition: Implement a function that works like Array.reduce().

function myReduce(arr, callback, initialValue){
    let accumulator = initialValue


    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)        
    }

    return accumulator
}

console.log(myReduce([10,20,30,40,50], function(acc, curr){
    return acc + curr
},0))