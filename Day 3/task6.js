// Separate numbers into even and odd groups.

let nums = [1, 2, 4, 16, 32, 64, 128, 256, 1121, 195, 135, 147, 151, 133];

let results = {
  even: [],
  odd: [],
};

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    results.even.push(nums[i]);
  } else {
    results.odd.push(nums[i]);
  }
}

console.log(results)
