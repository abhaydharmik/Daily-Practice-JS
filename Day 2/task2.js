// Count how many even numbers exist in an array.

let arr = [10, 15, 20, 25, 30]

let count = 0

for (let i = 0; i < arr.length; i++) {
    console.log("i:", i, "value:", arr[i]);
    if (arr[i] % 2 === 0) {
        count++
    }
    
}

console.log('Even Numbers:', count);
