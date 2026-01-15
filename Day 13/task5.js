// TASK 5: Group Objects by Key
// Problem Definition: Group objects in array by a given key.

// Input:

// let users = [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" },
//   { name: "C", role: "admin" }
// ];

let users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
  { name: "", role: "admin" },
];

function groupBy(arr, key){
    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let groupKey = arr[i][key]   
        console.log(groupKey)    
        
        if(!result[groupKey]){
            result[groupKey] = []
        }
        
        console.log(result[groupKey].push(arr[i]))    
        
    }

    return result
}

console.log(groupBy(users, "role"))