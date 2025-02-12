/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let amouont = 800;

if (age < 10){
    console.log("ticket is free for children")
}
else if (age < 25){
    discount = amouont * 50 / 100;
    payableAmount = amouont - discount;
    console.log("get 50% discount for students", payableAmount)
}
else if (age >= 60){
    discount = amouont * 15 / 100;
    payableAmount = amouont - discount;
    console.log("get 15% discount for old age people", payableAmount)
}
else {
    console.log("you have regular ticket price ", amouont)
}