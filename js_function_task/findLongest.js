function findLongestWord(words){
    let sentence = words.split(" "); 
    let longest = "";

    for (const word of sentence) { 
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const result = findLongestWord("I am learning Programming to become a programmer");
console.log(result);
