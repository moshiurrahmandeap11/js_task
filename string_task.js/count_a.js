// Count how many times a string has the letter a


let firstSentence = "my name is moshiur & try to be a best fuckin' developer"

let countA = 0;
for (const count of firstSentence){
    if (count === "a"){
        countA++;
    }
}


console.log("the letter a in this sentence is " + countA + " times");