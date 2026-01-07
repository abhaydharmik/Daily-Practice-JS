// TASK 7: Debugging Reduce Logic

// function sum(arr) {
//   let total = 0;

//   arr.forEach(function (num) {
//     total + num;
//   });

//   return total;
// }

//---- Why It Fails ----

// total + num does not update total
// Missing assignment

function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
}

console.log(sum([10, 20, 30, 40, 50]));
