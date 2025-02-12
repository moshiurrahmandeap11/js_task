/***

Generate a multiplication table for number 9

 */


/*programming hero*/


let number = 9;
for (i = 1; i <= 10; i++){
    result = number * i;
    let multiplication = number + " x " + i + " = " + result;
    console.log(multiplication)
}