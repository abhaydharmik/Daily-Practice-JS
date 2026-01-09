// TASK 1: Basic Fetch API (GET Request)
// Problem Definition: Fetch user data from a public API and log the result.

// API: https://jsonplaceholder.typicode.com/users/1

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})