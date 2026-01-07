// TASK 5: Sum of Prices Using Reduce Logic
// Problem Definition: Calculate total price from product list.

let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 200 }
];


let total = 0

for (let i = 0; i < products.length; i++) {
    total = total + products[i].price
}

console.log(total)