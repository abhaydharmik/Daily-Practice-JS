// TASK 4: Promise Basics
// Problem Definition: Create a promise that resolves after 2 seconds.

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise Resolved..!!")
    }, 2000)
})

promise.then(function(result){
    console.log(result)
})