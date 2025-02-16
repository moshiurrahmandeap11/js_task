// Write a function to count the number of vowels in a string.

function findVowels(vowels){
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    for (const vow of vowels.toLowerCase()){
        if (vowel.includes(vow)){
            count++;
        }
    }
    return count;
}

const result = findVowels("The quick brown fox jumps over the lazy dog is a pangram");
console.log(result);