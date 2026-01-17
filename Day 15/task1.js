// TASK 1: Understand Recursion with Simple Countdown
// Problem Definition: Print numbers from n to 1 using recursion.

function countDown(n) {
    if(n===0){
        return;
    }

    console.log(n)
    countDown(n-1)
}

countDown(5)