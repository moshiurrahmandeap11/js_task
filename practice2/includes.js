
// Create an array of books containing different book.
let books = ["psychologicl books", "science fiction", "comedy", "horror"]
console.log(books)

// Use the includes method to check if the array contains a javascript book.
let javaScriptBook = books.includes("javascript")
console.log(javaScriptBook)


// Print a message to the console indicating whether the element is present in the array or not.
if (javaScriptBook){
    console.log("yes have javascript book in the books array")
} else{
    console.log("no there was no book name which is called javascript")
}