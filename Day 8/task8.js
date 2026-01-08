// TASK 8: Debugging Async Code
// Buggy Code

// async function test() {
//   let data = fetchUser();
//   console.log(data);
// }

// test();

async function test() {
  let data = await fetchUser();
  console.log(data);
}

test();
