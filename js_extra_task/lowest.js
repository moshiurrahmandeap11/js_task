// Find the lowest number in the array below.

heights2 = [167, 190, 120, 165, 137];

function getLow(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if (num < max){
            max = num;
        }
    }
    return max;
}

const result = getLow(heights2);
console.log(result);