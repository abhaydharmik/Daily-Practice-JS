// TASK 1: Flatten Nested Object
// Problem Definition: Convert a nested object into a single-level object with dot notation keys.

// Input: let obj = {
//   name: "Abhay",
//   address: {
//     city: "Ahemdabad",
//     pin: 380008
//   },
//   skills: {
//     frontend: {
//       react: true

//     }
//   }
// };

let obj = {
  name: "Abhay",
  address: {
    city: "Ahemdabad",
    pin: 380008,
  },
  skills: {
    frontend: {
      react: true,
    },
  },
};

function flattenObj(obj, parentkey = "", result = {}) {
  for (const key in obj) {
    let newKey = parentkey ? parentkey + "." + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

console.log(flattenObj(obj));
