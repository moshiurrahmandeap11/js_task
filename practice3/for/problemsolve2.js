let products = [
    { name: "laptop", category: "electronics" },
    { name: "t-shirts", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "jeans", category: "clothing" }
];

let categorizedProducts = {
    electronics: [],
    clothing: [],
};

for (let i = 0; i < products.length; i++) {
    const single = products[i];
    
    if (single.category === "electronics") {
        categorizedProducts.electronics.push(single.name);
    } else if (single.category === "clothing") { 
        categorizedProducts.clothing.push(single.name);
    }
}

console.log(categorizedProducts);
