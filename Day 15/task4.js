// TASK 4: Reverse String Using Recursion
// Problem Definition: Reverse a string using recursion.

function revereString(str){
    if(str === ""){
        return ""
    }

    return revereString(str.slice(1))  + str[0]
}

console.log(revereString("Hello"))