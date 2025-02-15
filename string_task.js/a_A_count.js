// Count how many times a string has the letter a or A


let sentence = "a dog has A home And a cat dosen't hAve a home for living"

let count = 0;
for (const char of sentence){
    if (char === "a" || char === "A"){
        count++;
    }
}

console.log("the letter a or A has in this sentence " + count + " times");