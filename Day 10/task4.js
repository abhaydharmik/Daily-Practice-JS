// TASK 4: Simulate useEffect with Dependency
// Problem Definition: Run effect only when value changes.

let prevValue

function useEffectWithDep(value, callback) {
    if(value !== prevValue){
        callback()
        prevValue = value
    }
}

let count = 0

useEffectWithDep(count, function(){
    console.log("Effect run ,Count:", count)
})

count= 1

useEffectWithDep(count, function(){
    console.log("Effect run ,Count:", count)
})


count = 2
useEffectWithDep(count, function(){
    console.log("Effect run ,Count:", count)
})