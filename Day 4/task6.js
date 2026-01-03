// Why It Fails

// Function does not return anything
// Default return value is undefined

// function square(num) {
//   num * num;
// }

function square(num) {
  return num * num;
}

let result = square(4)
console.log(result)