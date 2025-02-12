// input "$249"
// output 15


let price = "$249"

let characters = price.split("")

let sum = 0;
for (i = 0; i < characters.length; i++){
    let element = characters[i];
    if (!isNaN(element) && element !== ""){
        sum += Number(element);
    }
}
console.log(sum)