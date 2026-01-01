// Debugging Task (Objects)
// Buggy Code

// for (let i = 0; i <= users.length; i++) {
//   let role = users[i].role;
//   result[role] = result[role] + 1;
// }

// Problems

// i <= users.length accesses un defined

// result[role] is undefined initially

let users = [{ role: "admin" }, { role: "manager" }, { role: "admin" }];

let result = {};

for (let i = 0; i < users.length; i++) {
  let role = users[i].role;

  if (result[role]) {
    result[role]++;
  } else {
    result[role] = 1;
  }
}

console.log(result)
