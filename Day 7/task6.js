// TASK 6: Convert Array to Object (Reduce Thinking)
// Problem Definition: Convert array into object keyed by id.

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];


let result = {}

for (let i = 0; i < users.length; i++) {
    result[users[i].id] = users[i]
}

console.log(result)