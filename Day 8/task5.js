// TASK 5: Promise with Error Handling
// Problem Definition: Reject promise if condition fails.

function checkAge(age){
    return new Promise(function(resolve, reject){
        if(age >= 18){
            resolve("Allowed")
        }else{
            reject("Not Allowed")
        }
    })
}

checkAge(18)
.then(function(msg){
    console.log(msg)
})
.catch(function(err){
    console.log(err)
})
