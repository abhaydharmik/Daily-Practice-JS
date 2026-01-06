// Sort an array of numbers in ascending order without using sort().

let arr = [5, 2, 9, 1, 7];

for (let i = 0; i < arr.length; i++) {
  console.log("I loop:", i, "Value:", arr[i]);
  for (let j = i + 1; j < arr.length; j++) {
    console.log("-------------------");
    console.log("J loop:", i, "Value:", arr[i]);
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("Ascending array:", arr);
