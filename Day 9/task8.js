// TASK 8: Debugging Fetch Mistake
// Buggy Code

// async function test() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   console.log(response.name);
// }

// test();

// Why It Fails

// response is not JSON

// .name does not exist

// Must parse JSON first

async function test() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json()
  console.log(data.name);
}

test();