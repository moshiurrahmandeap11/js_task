// Use a for...of loop to concatenate all the elements of an array into a single string.


var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let newLine = [];
for (const num of numbers){
    newLine += num;
}

console.log(newLine);