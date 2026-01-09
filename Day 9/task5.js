// TASK 5: POST Request Using Fetch
// Problem Definition: Send data to server using POST request.

async function fetchUser(params) {
 let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
        'Contet-Type': 'application/json'
    },

    body: JSON.stringify({
        title: "My Post",
        body: "This is content",
        userId: 1,
    })
 })
 let data = response.json
 console.log(data)    
}

fetchUser()