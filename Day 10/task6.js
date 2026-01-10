// TASK 6: Loading and Error State Pattern
// Problem Definition: Simulate loading and error handling logic.

let loading = false
let error = null
let data = null

async function fetchData() {
    loading = true
    console.log("Loading:",loading)

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        data = await response.json()
    } catch (err) {
        error = err
    }finally{
        loading = false
    }

    render()
}

function render(){
    if(loading){
        console.log("Loading..")
    }else if(error){
        console.log("Error:", error)
    }else {
        console.log("Data:", data)
    }
}

fetchData()