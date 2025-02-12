

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/



// Display sum of all the odd numbers from 81 to 131.


// let numbers = 81;
// let sum = 0;

// while(numbers <= 131){
//     if(numbers % 2 !== 0){
//         sum += numbers;
//     }
//     numbers++;
// }
// console.log(sum)

// Display sum of all the even numbers from 206 to 311.

let numbers = 206;
let sum = 0;

while(numbers <= 311){
    if(numbers % 2 === 0){
        sum += numbers;
    }
    numbers++;
}
console.log(sum)