// TASK 1: Understand “State” Using Plain JavaScript
// Problem Definition: Simulate how state works without React.

let count = 0

function increment(){
    count = count + 1
    render()
}

function render(){
    console.log("Count:", count)
}

render()
render()
increment()
increment()
increment()