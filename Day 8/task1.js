// TASK 1: Understand Asynchronous Behavior
// Problem Definition: Predict the output order of this code.

// Expected Output
// Start
// End
// Inside Timeout

console.log("Start")

setTimeout(function() {
    console.log("Inside Timeout")
}, 1000);

setTimeout(() => {
    console.log("Arrow Function Inside Timeout")
}, 1000);

console.log("End")