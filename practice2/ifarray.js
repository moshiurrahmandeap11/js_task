// Create different variables, each containing either an array or a non-array value.
// non array variable
let name = "Moshiur";

// non array variable
let age = 25;

// boolen non array 
let isStudent = true;

// array of numbers
let numbers = [1, 2, 3, 4, 5];

//array of strings
let fruits = ["apple", "banana", "cherry"];


// console.log(name);     
// console.log(age);      
// console.log(isStudent);
// console.log(numbers);     
// console.log(fruits);      



// Now use isArray to check if each variable is an array.

// console.log(Array.isArray(name))
// console.log(Array.isArray(age))
// console.log(Array.isArray(isStudent))
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(fruits))

// Print a message to the console indicating whether each variable is an array or not.

if (Array.isArray(name)){
    console.log("it's a array")
} else{
    console.log("not a array")
}

if (Array.isArray(age)){
    console.log("it's a array")
} else {
    console.log("not a array")
}

if (Array.isArray(numbers)){
    console.log("it's a array")
} else {
    console.log("not a array")
}

if (Array.isArray(fruits)){
    console.log("it's a array")
} else {
    console.log("not a array")
}

