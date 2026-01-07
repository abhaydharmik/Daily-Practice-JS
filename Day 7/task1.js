// Create Your Own map Function
// Problem Definition: Implement a function that works like Array.map().

// Input: [1, 2, 3]

// Callback: x => x * 2

// let arr = [1, 2, 3, 4]
// let result = arr.map((x)=> x *2)

// console.log(result)


function myMap(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let transformed = callback(arr[i], i, arr)   
        result.push(transformed)     
    }

    return result
}

console.log(myMap([1, 2, 3, 4, 5], function(x){
    return x * 2;
}))


