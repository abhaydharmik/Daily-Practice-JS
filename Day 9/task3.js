// TASK 3: Handle HTTP Errors Properly
// Problem Definition: Detect HTTP errors (404, 500) manually.

async function fetchUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1000")

        if(!response.ok){
            throw new Error("HTTP: " + response.status)
        }

        let data = response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

fetchUser()