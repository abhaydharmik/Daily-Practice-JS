// TASK 4: Fetch List and Loop Data
// 1. Problem Definition: Fetch list of users and print their names.

// API: https://jsonplaceholder.typicode.com/users

async function fetchUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let user = await response.json();

  for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
  }
}

fetchUser();
