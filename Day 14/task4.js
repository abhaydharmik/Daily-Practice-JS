// TASK 4: Remove Duplicates from Sorted Array (In Place)
// Problem Definition: Remove duplicates from sorted array.

function removeDupicate(arr) {
    if(arr.length === 0) return []

    let index = 1

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]){
            arr[index] = arr[i]
            index++
        }     
    }

    return arr.slice(0, index)
}

console.log(removeDupicate([1, 1, 2, 2, 3, 4, 4]))