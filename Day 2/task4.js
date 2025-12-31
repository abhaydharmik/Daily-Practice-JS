// Add only positive numbers from an array.

let arr = [-5, 10, -3, 20, 0, -2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log("i:", i, "value:", arr[i]);
    sum = sum + arr[i];
  }
}

console.log(sum);
