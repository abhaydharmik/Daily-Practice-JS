// TASK 3: Simulate useEffect (Side Effects)
// 1. Problem Definition: Run a function only once, like useEffect(() => {}, []).

let hasRun = false

function useEffectLike(callback){
    if(!hasRun){
        callback()
        hasRun = true
    }
}

useEffectLike(function(){
    console.log("Execution executed once..")
})

useEffectLike(function(){
    console.log("This will not run again..")
})