// TASK 4: Chunk Array into Smaller Arrays
// Problem Definition: Split array into chunks of given size.

// Input: [1,2,3,4,5,6,7], size = 3


function chunkArray(arr, size) {
    let result = []
    
    for (let i = 0; i < arr.length; i += size) {
        let chunk = []

        for (let j = i; j < i + size && j < arr.length; j++) {
            chunk.push(arr[j])            
        }

        result.push(chunk)
    }


    return  result
}

console.log(chunkArray([1,2,3,4,5,6,7], size = 3))