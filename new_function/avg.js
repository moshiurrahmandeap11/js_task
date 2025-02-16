// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for (const num of numbers){
        sum += num;
    }
    return sum / numbers.length;
}

const result = make_avg([10, 12, 20, 22, 30, 32]);
console.log(result);