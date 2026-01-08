// TASK 7: Simulate API Call (Real World)
// Problem Definition: Simulate fetching user data from server.

function fetchUser(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve([{id:1, name: 'Zoro'},
                {id:2, name: 'Briann'},
                {id:3, name: 'Domnic'},
                {id:4, name: 'Will'},
                {id:5, name: 'Max'},
                {id:6, name: 'Mike'},
            ])
        }, 1500)
    })
}

async function getUser() {
    let user =  await fetchUser()
    console.log(user)
}

getUser()