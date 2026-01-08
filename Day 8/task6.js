// TASK 6: Convert Promise to async/await
// Problem Definition: Rewrite promise code using async/await.

function checkAge(age){
    return new Promise(function(resolve, reject){
        if(age >= 18){
            resolve("Allowed")
        }else{
            reject("Not Allowed")
        }
    })
}

async function runCheck(){
    try{
        let result = await checkAge(16)
        console.log(result)
    }catch (err){
        console.log(err)
    }
}

runCheck()