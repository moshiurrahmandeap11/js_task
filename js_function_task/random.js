// Generate a random number between 10 to 20.

function randomNumber(numbers){
    let random = Math.floor(Math.random()*(20-10 + 1)+ 10);
    return random;
}

const result = randomNumber();
console.log(result);