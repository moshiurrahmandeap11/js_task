// Write a function to convert temperature from Celsius to Fahrenheit.

function convert(input){
    let fahrenheit =( input * 9/5 ) + 32;
    return fahrenheit;
}

const result = convert(20);
console.log(result);