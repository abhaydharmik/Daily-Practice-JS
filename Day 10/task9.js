// TASK 9: Mini React Mindset Challenge
// Problem Definition: Why this is wrong in React?

// let count = 0;

// function increment() {
//   count++;
// }

let count = 0

function setCount(newValue){
    count = newValue
    render()
}

function increment() {
    setCount(count + 1)
}

function render() {
    console.log("Count:",count)
}

render()
increment()
increment()
increment()
increment()