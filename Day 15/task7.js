// TASK 7: Debugging Recursion Error
// Buggy Code
// function print(n) {
//   console.log(n);
//   print(n - 1);
// }

// Why It Fails
// No base case
// Infinite recursion
// Causes stack overflow

function print(n) {
  if (n === 0) return ;
  console.log(n);
  print(n - 1);
}

print(7)