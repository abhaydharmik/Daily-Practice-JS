// Find factorial of a number using loop.

function factNum(num) {
    let result = 1

    for (let i = 1; i <=num; i++) {
        result = result * i;
    }

    return result
}

console.log(factNum(4))