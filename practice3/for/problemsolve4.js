// input "lightweight and durable backpack"

// output "backpack durable and lightweight"


let description = "lightweight and durable backpack"

let words = description.split(" ")

let reversed = "";

for (i = words.length - 1; i >= 0; i--){
    let element = words[i]
    reversed += element;
    if (i > 0){
        reversed += " ";
    }
}

console.log(reversed)