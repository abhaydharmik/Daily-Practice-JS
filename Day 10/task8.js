// TASK 8: Simulate Controlled Input
// Problem Definition: Simulate controlled input logic.

let inputValue = ""

function onChange(value) {
    inputValue = value
    render()
}

function render() {
    console.log("Value:", inputValue)
}


onChange("H")
onChange("He")
onChange("Hel")