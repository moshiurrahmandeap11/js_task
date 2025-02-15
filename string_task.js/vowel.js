// Check whether a string contains all the vowels a, e, i, o, u


let sentence = "The quick brown fox jumps over the lazy dog is a pangram";

let vowels = ['a', 'e', 'i', 'o', 'u'];
let result = vowels.every(vowel => sentence.toLowerCase().includes(vowel));

if (result) {
    console.log("The sentence contains all the vowels.");
} else {
    console.log("The sentence does not contain all the vowels.");
}
