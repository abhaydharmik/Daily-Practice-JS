// TASK 3: Convert Array to Nested Object
// Problem Definition: Convert array of paths into a nested object.

// Input: ["user.name", "user.age", "settings.theme"]

// Output:
// {
//   user: { name: null, age: null },
//   settings: { theme: null }
// }

function buildNestedObject(paths) {
  let result = {};

  for (let i = 0; i < paths.length; i++) {
    let keys = paths[i].split(".");
    let current = result;

    for (let j = 0; j < keys.length; j++) {
        if(!current[keys[j]]){
            current[keys[j]] = {}
        }
        current = current[keys[j]]
    }
  }

  return result
}

console.log(buildNestedObject(["user.name", "user.age", "settings.theme"]))
