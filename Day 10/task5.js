// TASK 5: Fetch Data on “Component Mount”
// Problem Definition: Simulate API call when component loads.

async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log(data)
}

let mounted = false


function componentMount(){
    if(!mounted){
        fetchUsers()
        mounted = true
    }
}


componentMount()