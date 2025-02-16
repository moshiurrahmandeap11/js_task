// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(a){
    if(a % 2 !== 0){
        let oddNumber = a * 3;
        return oddNumber;
    } else if(a % 2 === 0){
        let evenNumber = a / 2;
        return evenNumber;
    } else {
        return "invalid input"
    }
}

const result = number(10)
console.log(result);