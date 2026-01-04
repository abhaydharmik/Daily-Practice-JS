// result[users[i].role].push(users[i].name);

// Why It Fails

// result[role] is undefined initially
// Cannot call .push() on undefined

let users = [
  { name: "Aman", role: "admin" },
  { name: "Riya", role: "user" },
  { name: "Krish", role: "admin" }
];


let result = []

for (let i = 0; i < users.length; i++) {
    let role = users[i].role

    if(!result[role]){
        result[role] = []
    }
    
    result[users[i].role].push(users[i].name)
}

console.log(result)