// Return numbers greater than given value.

// filterGreater([5, 12, 8, 20, 3], 10)

function filterGreater(arr, x) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > x){
        result.push(arr[i])
    }    
  }

  return result
}

console.log(filterGreater([5, 12, 8, 20, 3], 10));
