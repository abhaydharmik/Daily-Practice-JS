// TASK 2: Deep Merge Two Objects
// Problem Definition: Merge two objects deeply (nested objects should merge, not overwrite).

// Input:
// let obj1 = { a: 1, b: { x: 10 } };
// let obj2 = { b: { y: 20 }, c: 3 };

// Output: { a: 1, b: { x: 10, y: 20 }, c: 3 }

let obj1 = { a: 1, b: { x: 10 } };
let obj2 = { b: { y: 20 }, c: 3 };

function mergeObj(obj1, obj2){
    let result = {...obj1}

    for (const key in obj2) {
        if(typeof obj2[key] === "object" && obj2[key] !== null && typeof result[key]==="object"){
           result[key] = mergeObj(result[key], obj2[key])
        }else{
            result[key] = obj2[key]
        }
    }

    return result
}

console.log(mergeObj(obj1, obj2))