// TASK 4: Find Deep Value by Path
// Problem Definition: Access nested value using dot notation path.

// Input:

// let obj = { user: { profile: { name: "Riya" } } };
// path = "user.profile.name";

let obj = { user: { profile: { name: "Riya" } } };
path = "user.profile.name";

function getValueByPath(obj, path) {
    let keys = path.split(".")
    let current = obj

    for (let i = 0; i < keys.length; i++) {
        if(!current) return undefined
        current = current[keys[i]]        
    }

    return current
}

console.log(getValueByPath(obj, path))