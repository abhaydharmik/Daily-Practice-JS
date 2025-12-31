// Remove repeated numbers from an array without using Set.

let num = [10, 40, 50, 60, 60, 40, 20, 20]
let uni = []

for (let i = 0; i < num.length; i++) {
    console.log("i(with):",i, "value: ",num[i])
    if(!uni.includes(num[i])){
        console.log('----------------');
        uni.push(num[i])
        console.log("i:",i, "value: ",num[i])
    }
}

console.log(uni)