// TASK 2: Fetch Using async/await
// 1. Problem Definition

// Rewrite Task 1 using async/await.

async function getUser() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/2")
        let data = await response.json()
        console.log(data)
    }catch (err){
        console.log(err)
    }
}

getUser()