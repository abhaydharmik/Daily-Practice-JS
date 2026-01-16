// TASK 7: Debugging Task (Two Pointers)
// Buggy Code
// while (left <= right) {
//   if (arr[left] !== arr[right]) return false;
//   left++;
//   right--;
// }

// Why It Is Risky

// When left === right, comparing same index is unnecessary
// In some logic, can cause extra comparisons

while (left < right) {
  if (arr[left] !== arr[right]) return false;
  left++;
  right--;
}