// Count how many products belong to each category.

let products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" }
];

let categoryCount = {}

for (let i = 0; i < products.length; i++) {
    let category = products[i].category    

    if (categoryCount[category]) {
        categoryCount[category]++
    } else {
        categoryCount[category] = 1
    }

}

console.log(categoryCount)