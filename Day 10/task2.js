// TASK 2: Why Direct Variable Change Is Not Enough
// Problem Definition: Understand why React needs state, not normal variables.

let value = 10

function changeValue() {
    value = 20
}

changeValue()
console.log("Value:", value)