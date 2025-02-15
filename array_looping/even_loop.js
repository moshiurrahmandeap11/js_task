// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNumber = [];
for (const num of numbers){
    if(num % 2 === 0){
        evenNumber.push(num);
    }
}

console.log(evenNumber);