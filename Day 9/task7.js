// TASK 7: Error Handling Pattern (Reusable)
// Problem Definition: Create a reusable fetch function with error handling.

async function fetchJSON(url) {
    let response = await fetch(url)

    if(!response.ok){
        throw new Error("Request Failed")
    }

    return response.json()
}

async function run(params) {
 try{
     let data = await fetchJSON("https://jsonplaceholder.typicode.com/users/1")
     console.log(data)
 }catch(error){
    console.log(error)
 }   
}

run()