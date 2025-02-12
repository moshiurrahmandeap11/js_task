let products = ["laptop", "desktop", "phone", "tablet", "laptop", "phone"]

let unique = []
for (i = 0; i < products.length; i++){
    const element = products[i];
    if (!unique.includes(element)){
        unique.push(element)
    }
}

console.log(unique)