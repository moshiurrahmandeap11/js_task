// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmall(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if (num.length < max.length){
            max = num;
        }
    }
    return max;
}

const result = getSmall(heights2);
console.log(result);