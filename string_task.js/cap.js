// Capitalize Every first Letter of each word in a String

let sentence = 'capitalize every first letter of each word in a string'


let capSentence = sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
console.log(capSentence);