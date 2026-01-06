// Check if a value exists in an array.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch([10, 20, 30, 40], 30));
