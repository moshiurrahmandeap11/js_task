/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for (i = 1; i <= 100; i++){
    let square = i * i;
    if (square <= 100){
        console.log("first number with square is ", square)
        break
    }
}