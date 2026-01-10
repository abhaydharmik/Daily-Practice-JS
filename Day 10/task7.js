// TASK 7: Why Infinite Loop Happens in React
// Problem Definition: Understand infinite re-render issue.

// let count = 0

// function render() {
//     count++
//     render()
// }

// render()


// we can fix using condition & loops


let count = 0

function render() {
    if(count >= 5) return
    count++
    console.log("Render: ", count)
    render()
}

render()