// Find the average of numbers in an array.

function avgNum(arr){

    //avoid divison by zero
    if(arr.length === 0){
        return 0
    }

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    return sum / arr.length
}

console.log(avgNum([10, 20, 30]))