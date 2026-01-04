// Return true only if all users are active.

let users = [
  { name: "Aman", active: true },
  { name: "Riya", active: true },
  { name: "Prince", active: false }
];


function allUserActive(users) {
    for (let i = 0; i < users.length; i++) {
        if(!users[i]){
            return false
        }        
    }

    return true
}

console.log('Active Users:', allUserActive(users) )