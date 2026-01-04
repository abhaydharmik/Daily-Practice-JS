// Find the user who spent the highest total amount.

let users = [
  { name: "Aman", purchases: [100, 200, 50] },
  { name: "Riya", purchases: [300, 150] },
  { name: "Hitvik", purchases: [120, 80, 40] }
];

let maxUser = null
let maxTotal = 0

for (let i = 0; i < users.length; i++) {
    let sum = 0
    
    for (let j = 0; j < users[i].purchases.length; j++) {
        sum = sum + users[i].purchases[j]
    }

    if(sum > maxTotal){
        maxTotal = sum
        maxUser = users[i].name
    }
    
}

console.log({User: maxUser, Total: maxTotal})

